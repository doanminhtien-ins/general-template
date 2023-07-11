import React, { Component, memo } from 'react'

import DocxTemplateHelper, { FILE_TEMPLATE_FIELD_TYPES, FILE_TEMPLATE_AVAILABLE_AUTO_FILLABLE_FIELDS } from '../helpers/docx_template_helpers'
import {
  Form,
  Button,
  Alert,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import GenerateFormField from './generate_form_field'
import moment from 'moment'

class GenerateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      doc: null,
      isLoading: false,
      templatePrefilledFields: {},
      docFields: {},
      hideableFields: {},
      savedFieldValues: null,
      isLoadingTemplateFailed: false,
      valueHolders: {
        startup: props.startup || {},
        deal: props.deal || {},
        insigniaSigner: props.currentUser,
        startupSigner: null,
      },
      insigniaSignerId: null,
      startupSignerId: null,
    }
    this.docxTemplateHelper = null
  }

  getData = () => {
    this.setState({
      isLoading: true,
    })
    const getTemplate = () => {
      this.docxTemplateHelper = new DocxTemplateHelper()
      this.docxTemplateHelper.setDefaultFieldValueBuilders(FILE_TEMPLATE_AVAILABLE_AUTO_FILLABLE_FIELDS)
      this.docxTemplateHelper.loadDoc(
        this.props.url,
        (doc) => {
          this.setState({
            isLoadingTemplateFailed: false,
          })
          this.fillValueToFields()
        },
        this.onDocDownloadFailed,
      )
    }
    this.setState(
      {
        valueHolders: {
          ...this.state.valueHolders,
        },
      },
      () => {
        getTemplate()
      },
    )
  }

  onChangeFieldValue = (name, modifiedValue, translatedValue) => {
    this.setState({
      ...this.state,
      docFields: {
        ...this.state.docFields,
        [name]: {
          ...this.state.docFields[name],
          modified_value: modifiedValue !== translatedValue ? modifiedValue : null,
        },
      },
    })
  }

  handleChangeHidableField = (fieldName) => {
    this.setState({
      ...this.state,
      hideableFields: {
        ...this.state.hideableFields,
        [fieldName]: {
          ...this.state.hideableFields[fieldName],
          value:
            this.state.hideableFields[fieldName] === 1 || this.state.hideableFields[fieldName]?.value === 1 ? 0 : 1,
        },
      },
    })
  }

  fillDoc = () => {
    let fieldAndValues = {}
    let hideableFieldAndValues = {}

    Object.values(this.state.docFields).map((field) => {
      if (field.type === FILE_TEMPLATE_FIELD_TYPES.FIXED_DATE.value) {
        fieldAndValues[field.name] = field.modified_value
          ? moment(field.modified_value).format('MMM DD, YYYY')
          : moment(field.translated_value).format('MMM DD, YYYY')
      } else {
        fieldAndValues[field.name] = field.modified_value
          ? field.modified_value
          : field.translated_value
          ? field.translated_value
          : ''
      }
      return field
    })

    Object.values(this.state.hideableFields).map((field) => {
      hideableFieldAndValues[field.name] = field.modified_value ? field.modified_value : field.value ? field.value : 0
      return field
    })

    try {
      this.docxTemplateHelper.setData({
        ...fieldAndValues,
        hide: hideableFieldAndValues,
      })

      return fieldAndValues
    } catch (error) {
      this.onDocDownloadFailed(error)
    }
  }

  downloadFile = (skipDownload = false) => {
    const fieldAndValues = this.fillDoc()
    if (!skipDownload) {
      this.docxTemplateHelper.createAndDownloadBlobFile(`${this.props.fileName || 'Downloaded_'}_${moment().format('YYYY_MM_DD_HH_mm_ss')}`)
    }
    if (this.props.onAfterDownload) {
      this.props.onAfterDownload(fieldAndValues)
    }
  }

  fillValueToFields = (savedFieldValues = null, valueHolders = null, changedValueHolder = null) => {
    if (!valueHolders) {
      valueHolders = this.state.valueHolders
    }

    let filledData = this.docxTemplateHelper.fillPlaceHolders(
      this.props.settings,
      savedFieldValues?.data,
      valueHolders,
      changedValueHolder,
    )

    this.setState({
      isLoading: false,
      docFields: {
        ...this.state.docFields,
        ...filledData.fields,
      },
      hideableFields: {
        ...this.state.hideableFields,
        ...filledData.hideableFields,
      },
    })
  }

  onDocDownloadFailed = (err) => {
    this.setState({
      isLoadingTemplateFailed: true,
      isLoading: false,
    })
  }

  hookFieldGenerate = (fieldName, value) => {}

  renderFields = (fields) => {
    return fields.map((field) => {
      return (
        <React.Fragment>
          <GenerateFormField
            hookFieldUpdate={this.hookFieldGenerate}
            key={'field_' + field.name}
            label={field.label ? field.label : field.name ? field.name.split('_').join(' ') : 'Unknown Field'}
            name={field.name}
            options={field.options || []}
            type={field.type || FILE_TEMPLATE_FIELD_TYPES.FIXED_TEXT.value}
            required={field.required}
            explanation={field.explanation}
            group={field.group_name}
            modifiedValue={field.modified_value}
            translatedValue={field.translated_value}
            handleChangeFieldValue={(e, { name, value }) => {
              this.onChangeFieldValue(name, value, field.translated_value)
            }}
          />
        </React.Fragment>
      )
    })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { isLoading, isLoadingTemplateFailed } = this.state

    let errorFields = []
    let content = null

    if (isLoading) {
      content = <div>Loading</div>
    } else if (isLoadingTemplateFailed) {
      content = (
        <Alert variant="danger">
          <Alert.Heading>We&apos;re sorry, something went wrong</Alert.Heading>
          <p>Template file can not be loaded</p>
        </Alert>
      )
    } else {
      let docFields = Object.values(this.state.docFields)
      docFields.sort((a, b) => {
        if (!a && !b) return 0
        if (!a) return 1
        if (!b) return -1
        return a.importance - b.importance
      })

      // verify if any fields are required but empty
      errorFields = docFields.filter((field) => {
        return (
          (field.modified_value === undefined && field.required === 1 && !field.translated_value) ||
          (field.modified_value !== undefined && !field.modified_value && field.required === 1)
        )
      })

      const buttons = (
        <React.Fragment>
          {this.props.onClose && (
            <Button className='docx-template__btn-close' disabled={isLoading} color="gray" onClick={() => this.props.onClose()}>
              Close
            </Button>
          )}
          <div style={{flex: 1}}></div>
          {!isLoading && !isLoadingTemplateFailed && (
            <Button className="docx-template__btn-download" disabled={errorFields.length > 0 || isLoading || !this.props.canDownload} color="blue" onClick={this.downloadFile}>
              Download Docx
            </Button>
          )}
          {!isLoading && !isLoadingTemplateFailed && (
            <Button className='docx-template__btn-save' disabled={isLoading} color="blue" onClick={() => this.downloadFile(true)}>
              Save
            </Button>
          )}
          {!(typeof this.props.noModal !== 'undefined') && (
            <Button disabled={isLoading} onClick={this.props.onClose}>
              {' '}
              Close
            </Button>
          )}
        </React.Fragment>
      )

      let hiddenFieldsArr = Object.entries(this.state.hideableFields)
  
      content = (
        <React.Fragment>
          <Form name="generateTestTemplateForm">
            <Container>
              <Row>
                <Col>
                  {!!this.props.injectedFieldsBefore && this.props.injectedFieldsBefore}
                  {this.renderFields(docFields)}
                  {hiddenFieldsArr.length > 0 && (
                    <Form.Group>
                      <label>Optional Clauses</label>
                      {Object.entries(this.state.hideableFields).map((field) => {
                        const fieldName = field[0]
                        return (
                          <Form.Group key={fieldName}>
                            <Form.Check 
                              checked={this.state.hideableFields[fieldName]?.value !== 1}
                              onChange={() => this.handleChangeHidableField(fieldName)}
                              toggle
                              label={
                                <label style={{ textTransform: 'capitalize' }}>{fieldName.split('_').join(' ')}</label>
                              }
                            />
                          </Form.Group>
                        )
                      })}
                    </Form.Group>
                  )}
                  {!!this.props.injectedFieldsAfter && this.props.injectedFieldsAfter}
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="docx-template__download-btn">{buttons}</div>
                </Col>
              </Row>
            </Container>
          </Form>
        </React.Fragment>
      )
    }
    
    return <div>{content}</div>
  }
}

export default memo(GenerateForm)
