export const FILE_TEMPLATE_AVAILABLE_AUTO_FILLABLE_FIELDS: ({
    key: string;
    value: string;
    text: string;
    holderType: null;
    getter: () => string;
    holderProperty?: undefined;
    isDynamic?: undefined;
} | {
    key: string;
    value: string;
    text: string;
    holderType: string;
    holderProperty: string;
    getter: (valueHolder: any) => any;
    isDynamic?: undefined;
} | {
    key: string;
    value: string;
    isDynamic: boolean;
    text: string;
    holderType: string;
    getter: (valueHolder: any) => any;
    holderProperty?: undefined;
} | {
    key: string;
    value: string;
    text: string;
    holderType: string;
    getter: (valueHolder: any) => any;
    holderProperty?: undefined;
    isDynamic?: undefined;
})[];
export namespace FILE_TEMPLATE_FIELD_TYPES {
    export namespace MATCH {
        export const key: string;
        export const value: string;
        export const text: string;
    }
    export namespace FIXED_TEXT {
        const key_1: string;
        export { key_1 as key };
        const value_1: string;
        export { value_1 as value };
        const text_1: string;
        export { text_1 as text };
    }
    export namespace FIXED_DATE {
        const key_2: string;
        export { key_2 as key };
        const value_2: string;
        export { value_2 as value };
        const text_2: string;
        export { text_2 as text };
    }
    export namespace COUNTRY_SELECT {
        const key_3: string;
        export { key_3 as key };
        const value_3: string;
        export { value_3 as value };
        const text_3: string;
        export { text_3 as text };
    }
    export namespace SINGLE_CHOICE_OPTION {
        const key_4: string;
        export { key_4 as key };
        const value_4: string;
        export { value_4 as value };
        const text_4: string;
        export { text_4 as text };
    }
}
export namespace FIELD_IMPORTANCE {
    export namespace VERY_HIGH {
        const key_5: string;
        export { key_5 as key };
        const value_5: number;
        export { value_5 as value };
        const text_5: string;
        export { text_5 as text };
    }
    export namespace HIGH {
        const key_6: string;
        export { key_6 as key };
        const value_6: number;
        export { value_6 as value };
        const text_6: string;
        export { text_6 as text };
    }
    export namespace MEDIUM {
        const key_7: string;
        export { key_7 as key };
        const value_7: number;
        export { value_7 as value };
        const text_7: string;
        export { text_7 as text };
    }
    export namespace LOW {
        const key_8: string;
        export { key_8 as key };
        const value_8: number;
        export { value_8 as value };
        const text_8: string;
        export { text_8 as text };
    }
}
export default DocxTemplateHelper;
declare class DocxTemplateHelper {
    loadedDoc: any;
    defaultFieldValueBuilders: any[];
    setDefaultFieldValueBuilders: (builders: any) => void;
    setDoc: (doc: any) => void;
    getTranslatedValueFromKey: (key: any, valueHolders: any) => any;
    valueHolderHasFieldName(valueHolderName: any, fieldName: any): boolean;
    fillPlaceHolders: (templateValues: any, savedValues?: any, valueHolders?: any, onlyValueHolderName?: any) => {
        fields: {};
        hideableFields: {};
        conditionFields: {};
    };
    loadDoc: (url: any, callbackSuccess?: () => void, callbackFailed?: () => void) => void;
    setData: (data: any) => void;
    createAndDownloadBlobFile: (filename: any, extension?: string) => void;
    extractNormalFields: () => any;
    extractConditionalOptionFields: () => any;
    extractHideableFields: () => any;
}
