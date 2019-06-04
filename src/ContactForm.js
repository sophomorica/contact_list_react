import React from "react"
import {Form} from "semantic-ui-react"

class ContactForm extends React.Component{

  render(){
    return(
      <Form>
        <Form.Group widths="equal">
          <Form.Input
          fluid
          label = "Name"
          placeholder = "Name"
          />
          <Form.Input
          fluid
          label = "Phone"
          placeholder = "Phone"
          />
          <Form.Button primary>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}
      
    
  





export default ContactForm