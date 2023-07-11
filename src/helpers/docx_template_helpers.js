import PizZip from 'pizzip'
import JSZipUtils from 'jszip-utils'
import Docxtemplater from 'docxtemplater'
import expressions from 'angular-expressions'
import assign from 'lodash/assign'

export const FILE_TEMPLATE_AVAILABLE_AUTO_FILLABLE_FIELDS = [
  {
    key: 'expired_date',
    value: 'expired_date',
    text: 'Expired Date',
    holderType: null,
    getter: () => {
      return moment().add(7, 'days)').format(stringDateFormat())
    },
  },
  {
    key: 'date',
    value: 'date',
    text: 'Date',
    holderType: null,
    getter: () => {
      return moment().add(7, 'days)').format(stringDateFormat())
    },
  },
  {
    key: 'startup_name',
    value: 'startup_name',
    text: 'Startup Name',
    holderType: 'startup',
    holderProperty: 'name',
    getter: (valueHolder) => {
      return valueHolder.name
    },
  },
  // {
  //   key: INSIGNIA_SIGNER_NAME,
  //   value: 'insignia_signer_name',
  //   isDynamic: true,
  //   text: 'Insignia Signer Name',
  //   holderType: 'insigniaSigner',
  //   getter: (valueHolder) => {
  //     return valueHolder?.name
  //   },
  // },
  {
    key: 'insignia_signer_title',
    value: 'insignia_signer_title',
    isDynamic: true,
    text: 'Insignia Signer Title',
    holderType: 'insigniaSigner',
    getter: (valueHolder) => {
      return valueHolder?.position_level
    },
  },
  // {
  //   key: STARTUP_SIGNER_NAME,
  //   value: STARTUP_SIGNER_NAME,
  //   isDynamic: true,
  //   text: 'Startup Signer Name',
  //   holderType: 'startupSigner',
  //   getter: (valueHolder) => {
  //     return valueHolder?.name
  //   },
  // },
  {
    key: 'startup_signer_title',
    value: 'startup_signer_title',
    isDynamic: true,
    text: 'Startup Signer Title',
    holderType: 'startupSigner',
    getter: (valueHolder) => {
      return valueHolder?.position
    },
  },
  {
    key: 'startup_country',
    value: 'startup_country',
    text: 'Startup Country',
    holderType: 'startup',
    getter: (valueHolder) => {
      let country = COUNTRY_OPTIONS.find((c) => c.value === valueHolder.country)
      return country ? country.text : ''
    },
  },
  {
    key: 'startup_address',
    value: 'startup_address',
    text: 'Startup Address',
    holderType: 'startup',
    getter: (valueHolder) => {
      return valueHolder.address
    },
  },
  {
    key: 'series',
    value: 'series',
    text: 'Series',
    holderType: 'deal',
    getter: (valueHolder) => {
      return valueHolder.round.toUpperCase()
    },
  },
  {
    key: 'fund_name',
    value: 'fund_name',
    text: 'Fund Name',
    holderType: 'deal',
    getter: (valueHolder) => {
      return valueHolder.fund?.name
    },
  },
  {
    key: 'pre_money_valuation',
    value: 'pre_money_valuation',
    text: 'Pre-Money Valuation',
    holderType: 'deal',
    getter: (valueHolder) => {
      return Formatter.fullCurrency(valueHolder.pre_valuation, '')
    },
  },
  {
    key: 'investment_amount',
    value: 'investment_amount',
    text: 'Investment Amount',
    holderType: 'deal',
    getter: (valueHolder) => {
      return Formatter.fullCurrency(valueHolder.total_raise, '')
    },
  },
  {
    key: 'ceo_name',
    value: 'ceo_name',
    text: 'CEO Name',
    holderType: 'startup',
    getter: (valueHolder) => {
      const CEO = valueHolder.people?.filter((person) => {
        return person.position === COMPANY_POSITION.CEO.value
      })[0]

      if (CEO) {
        return CEO.name
      }
      return ''
    },
  },
  {
    key: 'founders',
    value: 'founders',
    text: 'Founders',
    holderType: 'startup',
    getter: (valueHolder) => {
      let FOUNDER_POSITIONS = ['ceo', 'founder']
      const founders = valueHolder.people?.filter((person) => {
        let byRoles =
          person.roles && Array.isArray(person.roles) && person.roles.includes(PEOPLE_STARTUP_ROLES.admin.value)
        let byPosition =
          person.position &&
          FOUNDER_POSITIONS.filter((p) => {
            let re = new RegExp(p, 'i')
            return person.position.match(re)
          }).length > 0
        return byRoles || byPosition
      })

      if (founders?.length > 0) {
        return founders.map((founder) => founder.name).join(', ')
      }
      return ''
    },
  },
]

export const FILE_TEMPLATE_FIELD_TYPES = {
  MATCH: {
    key: 'match',
    value: 'match',
    text: 'Match',
  },
  FIXED_TEXT: {
    key: 'fixed_text',
    value: 'fixed_text',
    text: 'Fixed Text',
  },
  FIXED_DATE: {
    key: 'fixed_date',
    value: 'fixed_date',
    text: 'Fixed Date',
  },
  COUNTRY_SELECT: {
    key: 'country_select',
    value: 'country_select',
    text: 'Country Select',
  },
  COUNTRY_SELECT_SINGLE: {
    key: 'country_select_single',
    value: 'country_select_single',
    text: 'Single Country Select',
  },
  SINGLE_CHOICE_OPTION: {
    key: 'single_choice_option',
    value: 'single_choice_option',
    text: 'Single Choice Option',
  },
}

export const FIELD_IMPORTANCE = {
  VERY_HIGH: {
    key: 'very_high',
    value: 1,
    text: 'Very High',
  },
  HIGH: {
    key: 'high',
    value: 2,
    text: 'High',
  },
  MEDIUM: {
    key: 'medium',
    value: 3,
    text: 'Medium',
  },
  LOW: {
    key: 'low',
    value: 4,
    text: 'Low',
  },
}

class DocxTemplateHelper {
  loadedDoc
  defaultFieldValueBuilders = []

  setDefaultFieldValueBuilders = (builders) => {
    this.defaultFieldValueBuilders = builders
  }

  setDoc = (doc) => {
    this.loadedDoc = doc
  }

  getTranslatedValueFromKey = (key, valueHolders) => {
    const field = this.defaultFieldValueBuilders.filter((field) => field.key === key)[0]

    if (!field) {
      return null
    }

    return field.getter(valueHolders[field.holderType])
  }

  valueHolderHasFieldName(valueHolderName, fieldName) {
    const field = this.defaultFieldValueBuilders.filter((field) => field.key === fieldName)[0]

    if (!field) {
      return false
    }

    return field.holderType === valueHolderName
  }

  fillPlaceHolders = (templateValues, savedValues = null, valueHolders = null, onlyValueHolderName = null) => {
    if (!this.loadedDoc) {
      throw new Error('Loaded Doc has not been loaded, use loadDoc to load a Doc')
    }
    const docTextOnly = this.loadedDoc.getFullText()

    templateValues = {
      fields: templateValues.fields ?? {},
      hideableFields: templateValues.hideable_fields ?? {},
      conditionFields: templateValues.condition_fields ?? {},
    }

    let fields = {
      fields: this.extractNormalFields(docTextOnly) || [],
      hideableFields: this.extractHideableFields(docTextOnly) || [],
      conditionFields: this.extractConditionalOptionFields(docTextOnly) || [],
    }

    let fieldValues = {
      fields: {},
      hideableFields: {},
      conditionFields: {},
    }

    const fieldCategories = ['fields', 'hideableFields', 'conditionFields']

    fieldCategories.forEach((c) => {
      const cTemplateValues = templateValues ? templateValues[c] : {}
      const cSavedValues = savedValues ? (savedValues[c] ? savedValues[c] : {}) : {}

      fields[c].map((fieldName) => {
        const templateField = cTemplateValues[fieldName] || {}

        if (onlyValueHolderName && !this.valueHolderHasFieldName(onlyValueHolderName, fieldName)) {
          // only fill fields belongs to this value holder
          return fieldName
        }

        const savedField = cSavedValues[fieldName]
        let realField = savedField || templateField

        let realValue = ''
        const type = templateField ? templateField.type : FILE_TEMPLATE_FIELD_TYPES.FIXED_TEXT.value

        const importance = templateField
          ? templateField.importance
          : realField
          ? realField.importance
          : FIELD_IMPORTANCE.LOW.value
        const explanation = templateField
          ? templateField.explanation
          : realField
          ? realField.explanation
          : ''
        const required = templateField ? templateField.required : 0

        if (!realField) {
          realValue = ''
        } else if (realField.type === FILE_TEMPLATE_FIELD_TYPES.MATCH.value) {
          realValue = this.getTranslatedValueFromKey(realField.value, valueHolders)
        } else if (
          realField.type === FILE_TEMPLATE_FIELD_TYPES.COUNTRY_SELECT.value ||
          realField.type === FILE_TEMPLATE_FIELD_TYPES.FIXED_TEXT.value ||
          realField.type === FILE_TEMPLATE_FIELD_TYPES.FIXED_DATE.value ||
          realField.type === FILE_TEMPLATE_FIELD_TYPES.SINGLE_CHOICE_OPTION.value
        ) {
          realValue = realField.value
        }

        fieldValues[c][fieldName] = {
          key: fieldName,
          type: type,
          importance: importance,
          label: templateField.label,
          explanation: explanation,
          group_name: templateField.group_name,
          required: required,
          name: fieldName,
          options: templateField.options || [],
          value: templateField ? templateField.value : null, // before translated
          translated_value: realValue, // after translated
          modified_value: onlyValueHolderName // modified after translated
            ? realValue
            : realField
            ? realField
              ? realField.modified_value
              : null
            : null,
        }
      })
    })

    return fieldValues
  }

  loadDoc = (url, callbackSuccess = () => {}, callbackFailed = () => {}) => {
    JSZipUtils.getBinaryContent(`${url}`, (err, data) => {
      if (err) {
        return callbackFailed(err)
      }

      var zip = new PizZip(data)

      var doc
      try {
        doc = new Docxtemplater(zip, { parser: angularParser })
        this.setDoc(doc)
      } catch (error) {
        // Catch compilation errors (errors caused by the compilation of the template : misplaced tags)
        callbackFailed(err)
        return
      }

      callbackSuccess(doc)
    })
  }

  setData = (data) => {
    this.loadedDoc.setData(data)
    this.loadedDoc.render()
  }

  createAndDownloadBlobFile = (filename, extension = 'docx') => {
    let body = this.loadedDoc.getZip().generate({ type: 'blob' })
    const blob = new Blob([body])
    const fileName = `${filename}.${extension}`
    if (navigator.msSaveBlob) {
      // IE 10+
      navigator.msSaveBlob(blob, fileName)
    } else {
      const link = document.createElement('a')
      // Browsers that support HTML5 download attribute
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        link.setAttribute('download', fileName)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
  }

  extractNormalFields = () => {
    const text = this.loadedDoc.getFullText()
    let fields = text.match(/{[^#^/][^{^}]+}/g)

    console.log('field: ', fields)

    // conditional field (start with # but no having #hide. or #option.)
    let conditionalFields = text.match(/{#((?!hide\.|option\.).)[^{^}]+}/g)

    console.log('conditionalFields: ', conditionalFields)

    if (!fields) {
      fields = []
    } else {
      fields = fields.map((field) => field.replace('{', '').replace('}', ''))
    }

    if (!conditionalFields) {
      conditionalFields = []
    } else {
      conditionalFields = conditionalFields.map((field) => field.replace('{', '').replace('}', '').replace('#', '').split('!=')[0].split('==')[0].trim())
    }

    fields = fields.concat(conditionalFields)

    fields = fields.filter((v, i, a) => a.indexOf(v) === i)

    return fields
  }

  extractConditionalOptionFields = () => {
    const text = this.loadedDoc.getFullText()
    let fields = text.match(/{#option.[^{^}]+}/g)

    if (!fields) {
      fields = []
    } else {
      fields = fields.map((field) => field.replace('{', '').replace('}', ''))
    }

    fields = fields.map((field) => field.replace('#option.', '').split('!=')[0].split('==')[0].trim())

    fields = fields.filter((v, i, a) => a.indexOf(v) === i)

    return fields
  }

  extractHideableFields = () => {
    const text = this.loadedDoc.getFullText()
    let fields = text.match(/{#hide.[^{^}]+}/g)

    if (!fields) {
      fields = []
    } else {
      fields = fields.map((field) => field.replace('{', '').replace('}', ''))
    }

    fields = fields.map((field) => field.replace('#hide.', '').split('!=')[0].split('==')[0].trim())

    fields = fields.filter((v, i, a) => a.indexOf(v) === i)

    return fields
  }
}

expressions.filters.lower = function (input) {
  if (!input) return input
  return input.toLowerCase()
}

function angularParser(tag) {
  if (tag === '.') {
    return {
      get: function (s) {
        return s
      },
    }
  }
  const expr = expressions.compile(tag.replace(/(’|‘)/g, "'").replace(/(“|”)/g, '"'))
  return {
    get: function (scope, context) {
      let obj = {}
      const scopeList = context.scopeList
      const num = context.num
      for (let i = 0, len = num + 1; i < len; i++) {
        obj = assign(obj, scopeList[i])
      }
      return expr(scope, obj)
    },
  }
}

export default DocxTemplateHelper
