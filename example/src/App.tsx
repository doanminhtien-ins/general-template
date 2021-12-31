import React from 'react'

import { DocxTemplate } from 'general-template'
import 'general-template/dist/index.css'

const App = () => {
  return <div style={{padding: "20px"}}>
    <DocxTemplate
      fileName="Termsheet"
      canDownload={true}
      injectedFieldsAfter={<span>SOmething More</span>}
      injectedFieldsBefore={<span>SOmething More</span>}
      onAfterDownload={(data) => console.log('daata', data)}
      url={'https://rafael-prod.s3-ap-southeast-1.amazonaws.com/user_uploaded_files/file_template/general/832a1211-d999-4ca7-b1a7-a162ecf6f1cb.docx'} 
      settings={
        {
          "fields": {
            "series_round": {
              "label": "Overriden label",
              "type": "fixed_text",
              "required": 1,
              "importance": 1,
              "group_name": "Super Test",
            },
            "termsheet_date": {
              "type": "fixed_date",
              "required": 1,
              "importance": 1
            },
            "company_name": {
              "type": "fixed_text",
              "required": 1,
              "importance": 2
            },
            "founder_name": {
              "type": "fixed_text",
              "required": 1,
              "importance": 2
            },
            "company_CEO_name": {
              "type": "fixed_text",
              "required": 1,
              "importance": 1
            },
            "investor_name": {
              "type": "fixed_text",
              "required": 1,
              "importance": 3
            },
            "Investor_director_name": {
              "type": "fixed_text",
              "required": 1,
              "importance": 3
            },
            "lead_investor_name": {
              "type": "fixed_text",
              "required": 1,
              "importance": 4
            },
            "lead_investor_have_right_to_appoint_a_board_member": {
              "type": "single_choice_option",
              "options": [
                "Yes",
                "No",
              ],
              "required": 1,
              "importance": 4
            },
            "lead_investment_amount": {
              "type": "fixed_text",
              "required": 1,
              "importance": 4
            },
            "total_number_of_board_members": {
              "type": "fixed_text",
              "required": 1,
              "importance": 4
            },
            "total_non_lead_investment_amount": {
              "type": "fixed_text",
              "required": 1,
              "importance": 4
            },
            "pre_money_valuation": {
              "type": "fixed_text",
              "required": 1,
              "importance": 5
            },
            "expenses_maximum_cap": {
              "type": "fixed_text",
              "required": 1,
              "importance": 5
            },
            "post_money_valuation": {
              "type": "fixed_text",
              "required": 1,
              "importance": 5
            }
          },
          "hideable_fields": {}
        }
      } />
  </div>
}

export default App
