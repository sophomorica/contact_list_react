import React from "react"
import {Form} from "semantic-ui-react"

class ContactForm extends React.Component{
  state = { name: "", phone: "", };

  handleChange= ({name, value}) => { //arrow function, you don't have to bind
    this.setState({ [name]: [value] })
  
  }
  handleSubmit= () =>{
    debugger
  }
  
  render(){
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
          fluid
          label = "Name"
          placeholder = "Name"
          name = "name"
          value = {this.state.name}
          onChange = {this.handleChange}
          />
          <Form.Input
          fluid
          label = "Phone"
          placeholder = "Phone"
          name = "phone"
          value = {this.state.phone}
          onChange = {this.handleChange}
          />
          <Form.Button primary>Submit</Form.Button>
        </Form.Group>
      </Form>
    )
  }
}
      
    
  





export default ContactForm