import React from "react"
import {Form} from "semantic-ui-react"

class ContactForm extends React.Component{
  state = { name: "", phone: "", };

  handleChange= (e) => { //arrow function, you don't have to bind
    this.setState({ [e.target.name]: [e.target.value] })
    // switch(e.target){
    //   case "name":
    //     this.setState({ name: e.target.value})
    //     break;
    //   case "phone":
    //     this.setState({phone: e.target.value})
    //   break;
      
    // }
  }
  
  render(){
    return(
      <Form>
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