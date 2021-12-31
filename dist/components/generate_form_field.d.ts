export default GenerateFormField;
declare class GenerateFormField extends React.PureComponent<any, any, any> {
    constructor(props: any);
    getValue: (props: any) => any;
    rollBackValue: () => void;
    handleChangeFieldValue: (e: any, { name, value }: {
        name: any;
        value: any;
    }) => void;
}
declare namespace GenerateFormField {
    export const propTypes: {
        label: PropTypes.Requireable<string>;
        name: PropTypes.Requireable<string>;
        type: PropTypes.Requireable<string>;
        importance: PropTypes.Requireable<any>;
        required: PropTypes.Requireable<any>;
        value: PropTypes.Requireable<any>;
    };
}
import React from "react";
import PropTypes from "prop-types";
