import React, { Component } from 'react'

import DocxTemplateHelper, { FILE_TEMPLATE_FIELD_TYPES, FILE_TEMPLATE_AVAILABLE_AUTO_FILLABLE_FIELDS } from '../helpers/docx_template_helpers'
import {
  Form,
  Button,
  Alert,
  InputGroup,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import GenerateFormField from './generate_form_field'
import moment from 'moment'
// import { STARTUP_LOADED_MODULES, MODULE } from '../../../utilities/constant'
// import UserDropdown from '../../view/user-dropdown'
// import Search from '../../search'
// import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'

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
    // this.props.getStartup(this.props.testStartupId, STARTUP_LOADED_MODULES.people).then(() => {
    //   this.setState(
    //     {
    //       valueHolders: {
    //         ...this.state.valueHolders,
    //         startup: this.props.startups[this.props.testStartupId],
    //       },
    //     },
    //     () => {
    //       getTemplate()
    //     },
    //   )
    // })
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

  downloadFile = () => {
    const fieldAndValues = this.fillDoc()
    this.docxTemplateHelper.createAndDownloadBlobFile(`${this.props.fileName || 'Downloaded_'}_${moment().format('YYYY_MM_DD_HH_mm_ss')}`)
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
    console.log('err', err)
    this.setState({
      isLoadingTemplateFailed: true,
      isLoading: false,
    })
  }

  onFieldChanged = (e, { name, value }) => {
    this.setState({
      [name]: value,
    })
  }

  onInsigniaSignerChanged = (value) => {
    const valueHolders = {
      ...this.state.valueHolders,
      insigniaSigner: value,
    }

    this.setState({
      insigniaSignerId: value.id,
      valueHolders: valueHolders,
    })

    this.fillValueToFields(null, valueHolders, 'insigniaSigner')
  }

  onStartupSignerChanged = (value) => {
    const valueHolders = {
      ...this.state.valueHolders,
      startupSigner: value,
    }

    this.setState({
      startupSignerId: value.id,
      valueHolders: valueHolders,
    })

    this.fillValueToFields(null, valueHolders, 'startupSigner')
  }

  hookFieldGenerate = (fieldName, value) => {
    // if (fieldName === 'expired_date') {
    //   this.expiredDate = value
    // }
  }

  // getDealNamePart = () => {
  //   return this.props.deal ? '-' + this.props.deal.round : ''
  // }

  // renderInsigniaSignerField = () => {
  //   return (
  //     <Form.Field>
  //       <label>Select Insignia Signer</label>
  //       <UserDropdown
  //         placeholder="Signer"
  //         users={this.props.users}
  //         value={this.state.insigniaSignerId}
  //         filterfn={(user) => user.active}
  //         onChange={(e, { value }) => this.onInsigniaSignerChanged(this.props.users[value])}
  //       />
  //     </Form.Field>
  //   )
  // }

  // renderStartupSignerField = () => {
  //   const { people } = this.props.startups[this.props.testStartupId]
  //   const { showSearchStartupSigner } = this.state

  //   return !people || people.length === 0 || showSearchStartupSigner ? (
  //     <Form.Field>
  //       {people.length > 0 && (
  //         <span
  //           role="link"
  //           tabIndex={-1}
  //           onClick={() => this.setState({ showSearchStartupSigner: false })}
  //           className="font-9 cursor-pointer"
  //           style={{ float: 'right', color: 'blue' }}>
  //           Select Startup Person
  //         </span>
  //       )}
  //       <label>Select Startup Signer</label>
  //       <Search
  //         module={MODULE.PERSON}
  //         showAddButton={false}
  //         onResultSelect={(e, { result }) => {
  //           this.onStartupSignerChanged(result)
  //         }}
  //       />
  //     </Form.Field>
  //   ) : (
  //     <Form.Field>
  //       <span
  //         role="link"
  //         tabIndex={-1}
  //         onClick={() => this.setState({ showSearchStartupSigner: true })}
  //         className="font-9 cursor-pointer text-blue"
  //         style={{ float: 'right', color: 'blue' }}>
  //         Search Person
  //       </span>
  //       <label>Select Startup Signer</label>
  //       <Dropdown
  //         clearable
  //         fluid
  //         selection
  //         search
  //         options={people.map((person) => {
  //           return {
  //             key: 'dropdown_person_' + person.id,
  //             text: person.name,
  //             value: person.id,
  //           }
  //         })}
  //         value={this.state.startupSignerId}
  //         placeholder="Select a person"
  //         onChange={(e, { value }) => {
  //           const selectedPerson = people.find((p) => p.id === value)
  //           this.onStartupSignerChanged({
  //             id: selectedPerson.id,
  //             name: selectedPerson.name,
  //             email: selectedPerson.email,
  //             position: selectedPerson.position,
  //           })
  //         }}
  //       />
  //     </Form.Field>
  //   )
  // }

  renderFields = (fields) => {
    let generatedInsigniaSignerField = false
    let generatedStartupSignerField = false
    return fields.map((field) => {
      let generateInsigniaSignerField = false
      // if (field.type === FILE_TEMPLATE_FIELD_TYPES.MATCH.value && field.value === INSIGNIA_SIGNER_NAME) {
      //   generatedInsigniaSignerField = true
      //   generateInsigniaSignerField = true
      // }

      let generateStartupSignerField = false
      // if (field.type === FILE_TEMPLATE_FIELD_TYPES.MATCH.value && field.value === STARTUP_SIGNER_NAME) {
      //   generatedStartupSignerField = true
      //   generateStartupSignerField = true
      // }
      return (
        <React.Fragment>
          {/* {generateInsigniaSignerField && this.renderInsigniaSignerField()} */}
          {/* {generateStartupSignerField && this.renderStartupSignerField()} */}
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
      content = 'Loading'
      // content = (
      //   <Segment style={{ border: 'none', boxShadow: 'none' }}>
      //     <Dimmer active inverted>
      //       <Loader active inline="centered" />
      //     </Dimmer>
      //   </Segment>
      // )
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

      const docFieldsLen = docFields.length

      const buttons = (
        <React.Fragment>
          {!isLoading && !isLoadingTemplateFailed && (
            <Button disabled={errorFields.length > 0 || isLoading || !this.props.canDownload} color="blue" onClick={this.downloadFile} icon>
              Download
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
  
      content = (
        <React.Fragment>
          <Form name="generateTestTemplateForm">
            <Container>
              <Row>
                <Col>
                  {!!this.props.injectedFieldsBefore && this.props.injectedFieldsBefore}
                  {this.renderFields(docFields)}
                  {Object.entries(this.state.hideableFields).length > 0 && (
                    <Form.Field>
                      <label>Optional Clauses</label>
                      {Object.entries(this.state.hideableFields).map((field) => {
                        const fieldName = field[0]
                        return (
                          <Form.Field key={fieldName}>
                            <InputGroup.Checkbox
                              checked={this.state.hideableFields[fieldName]?.value !== 1}
                              onChange={() => this.handleChangeHidableField(fieldName)}
                              toggle
                              label={
                                <label style={{ textTransform: 'capitalize' }}>{fieldName.split('_').join(' ')}</label>
                              }
                            />
                          </Form.Field>
                        )
                      })}
                    </Form.Field>
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

export default GenerateForm
