import React from 'react';
import "./assets/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';
interface Props {
    url: string;
    settings: any;
    canDownload?: boolean;
    onAfterDownload?: (data: any) => void;
    injectedFieldsBefore?: any;
    injectedFieldsAfter?: any;
    fileName?: string;
    onClose?: () => void;
}
export declare const DocxTemplate: React.MemoExoticComponent<({ url, settings, canDownload, onAfterDownload, injectedFieldsBefore, injectedFieldsAfter, fileName, onClose }: Props) => JSX.Element>;
export {};
