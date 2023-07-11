import React, { memo } from 'react'
import "./assets/styles.css"
import "bootstrap/dist/css/bootstrap.min.css";
import 'semantic-ui-css/semantic.min.css'
import 'react-datepicker/dist/react-datepicker.css'
// @ts-ignore
import GenerateForm from './components/generate_form'

interface Props {
  url: string
  settings: any
  canDownload?: boolean
  onAfterDownload?: (data: any) => void
  injectedFieldsBefore?: any
  injectedFieldsAfter?: any
  fileName?: string
  onClose?: () => void
}

export const DocxTemplate = memo(({ url, settings, canDownload, onAfterDownload, injectedFieldsBefore, injectedFieldsAfter, fileName, onClose }: Props) => {
  return <GenerateForm noModal url={url}
    settings={settings}
    canDownload={canDownload}
    onAfterDownload={onAfterDownload}
    injectedFieldsBefore={injectedFieldsBefore}
    injectedFieldsAfter={injectedFieldsAfter}
    fileName={fileName}
    onClose={onClose}
  />
})

