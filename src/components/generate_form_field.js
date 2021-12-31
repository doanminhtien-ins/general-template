import React, { PureComponent } from 'react'
import { FILE_TEMPLATE_FIELD_TYPES } from '../helpers/docx_template_helpers'
import { Form, Alert, Col } from 'react-bootstrap'
import { Dropdown } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'moment/locale/en-sg'
import { COUNTRY_OPTIONS } from '../helpers/countries'

class GenerateFormField extends PureComponent {
  constructor(props) {
    super(props)

    const initValue = this.getValue(props)
    this.state = {
      value: initValue,
    }

    this.props.hookFieldUpdate(this.props.name, initValue)
  }

  getValue = (props) => {
    return props.modifiedValue !== undefined ? props.modifiedValue : props.translatedValue
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (
      nextProps.modifiedValue !== this.props.modifiedValue ||
      nextProps.translatedValue !== this.props.translatedValue
    ) {
      this.setState({
        value: this.getValue(nextProps),
      })
    }
  }

  rollBackValue = () => {
    this.setState({
      value: this.props.translatedValue,
    })
    const name = this.props.name
    this.props.handleChangeFieldValue(null, { name, undefined })
    this.props.hookFieldUpdate(this.props.name, this.props.translatedValue)
  }

  handleChangeFieldValue = (e, { name, value }) => {
    this.setState({
      value: value,
    })
    this.props.handleChangeFieldValue(e, { name, value })
    this.props.hookFieldUpdate(this.props.name, value)
  }

  render() {
    const hasError = this.props.required === 1 && !this.state.value

    return (
      <React.Fragment>
        {
          this.props.group && <div className="docx-template__group-name">{this.props.group}</div>
        }
        <Form.Group className="fluid" key={'field_' + this.props.name}>
          {/* {this.props.type !== FILE_TEMPLATE_FIELD_TYPES.FIXED_DATE.value &&
            this.props.modifiedValue !== undefined &&
            this.props.modifiedValue !== this.props.translatedValue && (
              <Popup
                position="bottom left"
                flowing
                hoverable
                trigger={<Icon color="orange" className="float-right" name="warning" />}>
                <Popup.Content>
                  <div style={{ maxWidth: '300px' }}>
                    This field has been manually changed. The orignia value is{' '}
                    <strong>
                      {this.props.translatedValue} {!this.props.translatedValue && '(Empty)'}
                    </strong>
                    <div className="mt-2 text-right">
                      <Button icon onClick={this.rollBackValue}>
                        <Icon name="refresh" /> Rollback
                      </Button>
                    </div>
                  </div>
                </Popup.Content>
              </Popup>
            )
          } */}
          <Form.Label className="mt-2">
            <span style={{ textTransform: 'capitalize' }}>{this.props.label} {this.props.required === 1 && <span style={{ color: 'red' }}>*</span>}</span>
          </Form.Label>
          {this.props.type !== FILE_TEMPLATE_FIELD_TYPES.FIXED_DATE.value &&
            this.props.type !== FILE_TEMPLATE_FIELD_TYPES.COUNTRY_SELECT.value &&
            this.props.type !== FILE_TEMPLATE_FIELD_TYPES.SINGLE_CHOICE_OPTION.value && (
              <Form.Control
                // placeholder={this.props.label}
                value={this.state.value ? this.state.value : ''}
                name={this.props.name}
                fluid
                onChange={(e) => this.handleChangeFieldValue(null, {name: this.props.name, value: e.target.value})}
              />
            )}
          {this.props.type === FILE_TEMPLATE_FIELD_TYPES.FIXED_DATE.value && (
            <DatePicker
              className="form-control"
              selected={
                isNaN(Date.parse(this.state.value)) ? '' : new Date(moment(this.state.value).format('YYYY-MM-DD'))
              }
              onChange={(value) => {
                const name = this.props.name
                this.handleChangeFieldValue(null, { name, value })
              }}
              dateFormat="MMMM dd, yyy"
            />
          )}
          {this.props.type === FILE_TEMPLATE_FIELD_TYPES.COUNTRY_SELECT.value && (
            // <Form>
            //   <Form.Group controlId="my_multiselect_field">
            //     <Form.Control as="select"
            //       multiple
            //       value={this.state.value ? this.state.value.split(', ') : []}
            //       onChange={e => {
            //         const values = [].slice.call(e.target.selectedOptions).map(item => item.value)
            //         this.handleChangeFieldValue(e, { name: this.props.name, value: values.join(',') })
            //       }}>
            //         <option value={'x'}>xx</option>
            //         <option value={'y'}>yy</option>
            //       {COUNTRY_OPTIONS.map((c) => {
            //         <option value={c.text}>{c.text}</option>
            //       })} 
            //     </Form.Control>
            //   </Form.Group>
            // </Form>
            <Dropdown
              className="form-control"
              // placeholder={this.props.label}
              value={this.state.value ? this.state.value.split(', ') : []}
              name={this.props.name}
              selection
              search
              multiple
              options={COUNTRY_OPTIONS.map((c) => {
                return { value: c.text, text: c.text, key: c.key }
              })}
              onChange={(e, { name, value }) => {
                value = value.join(', ')
                this.handleChangeFieldValue(e, { name, value })
              }}
            />
          )}
          {this.props.type === FILE_TEMPLATE_FIELD_TYPES.SINGLE_CHOICE_OPTION.value && (
            <Dropdown
              className="form-control"
              // placeholder={this.props.label}
              value={this.state.value ? this.state.value : null}
              name={this.props.name}
              selection
              search
              options={this.props.options.map((o) => {
                return {
                  key: o,
                  text: o,
                  value: o,
                }
              })}
              onChange={this.handleChangeFieldValue}
            />
          )}
          {
            this.props.explanation && this.props.explanation !== '' && <div className="docx-template__explanation">
              * {this.props.explanation}
            </div>
          }
          {/* {hasError && (
            <Alert variant="danger">
              <p>"{this.props.label}" field can not be empty</p>
            </Alert>
          )} */}
        </Form.Group>
      </React.Fragment>
    )
  }
}

export default GenerateFormField
