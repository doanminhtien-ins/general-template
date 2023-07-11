import React from 'react'

import { DocxTemplate } from 'general-template'
import 'general-template/dist/index.css'

const App = () => {
  return <div style={{padding: "20px"}}>
    <DocxTemplate
      fileName="Termsheet"
      onClose={() => {}}
      canDownload={true}
      injectedFieldsAfter={<span>SOmething More</span>}
      injectedFieldsBefore={<span>SOmething More</span>}
      onAfterDownload={(data) => console.log('daata', data)}
      url={'https://rafael-prod.s3-ap-southeast-1.amazonaws.com/user_uploaded_files/file_template/general/d92a3411-cf62-4c66-9a99-c35396216734.docx'} 
      settings={
        {
          "fields": {
            "company_name": {
              "type": "fixed_text",
              "importance": 1,
              "required": 1,
              "group_key": 'group1',
            },
            "founder_name": {
              "type": "fixed_text",
              "required": 1,
              "importance": 1,
              "group_key": 'group1',
            },
            "post_money_valuation": {
              "type": "fixed_text",
              "required": 1,
              "importance": 1,
              "group_key": 'group1',
            },
            "termsheet_expiry_date": {
              "type": "fixed_date",
              "required": 1,
              "importance": 1,
              "group_key": 'group1',
            },
            "total_investment_amount": {
              "type": "fixed_text",
              "required": 1,
              "importance": 1,
              "group_key": 'group1',
            },
            "additional_founder_names": {
              "type": "fixed_text",
              "required": 1,
              "importance": 1,
              "group_key": 'group2',
            },
            "lead_investor_shareholding": {
              "type": "country_select_single",
              "required": 1,
              "importance": 1,
            },
            "amount_invested_by_lead_investor": {
              "type": "fixed_text",
              "required": 1,
              "importance": 1,
              "value": 'test',
              "group_key": 'group2',
            },
            "amount_to_be_invested_by_other_investors_excluding_the_lead_investor": {
              label: "Select The Currency For The Financing",
              type: "single_choice_option",
              options: ["US$", "S$"],
              required: 1,
              importance: 6,
              explanation: "",
              'value': "US$",
              "group_key": 'group2',
            }
          },
          "groups": [
            {
              key: 'group1',
              text: 'Group Number 1',
            },
            {
              key: 'group2',
              text: 'Group Number 2',
            }
          ],
          "hideable_fields": {}
        }
      } />
  </div>
}

export default App
