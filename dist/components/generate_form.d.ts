export default GenerateForm;
declare class GenerateForm extends React.Component<any, any, any> {
    constructor(props: any);
    docxTemplateHelper: DocxTemplateHelper | null;
    getData: () => void;
    onChangeFieldValue: (name: any, modifiedValue: any, translatedValue: any) => void;
    handleChangeHidableField: (fieldName: any) => void;
    fillDoc: () => void;
    downloadFile: () => void;
    fillValueToFields: (savedFieldValues?: any, valueHolders?: any, changedValueHolder?: any) => void;
    onDocDownloadFailed: (err: any) => void;
    onFieldChanged: (e: any, { name, value }: {
        name: any;
        value: any;
    }) => void;
    onInsigniaSignerChanged: (value: any) => void;
    onStartupSignerChanged: (value: any) => void;
    hookFieldGenerate: (fieldName: any, value: any) => void;
    renderFields: (fields: any) => any;
}
import React from "react";
import DocxTemplateHelper from "../helpers/docx_template_helpers";
