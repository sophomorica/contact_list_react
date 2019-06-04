import React from "react"
import {Form} from "semantic-ui-react"

class ContactForm extends React.Component{
  state = { name: "", phone: "", };

  handleChange= (e) => { //arrow function, you don't have to bind
  this.setState({ [e.target.name]: [e.target.value] })
    //this.setState({ [name]: [value] })
  
  }
  handleSubmit= (e) =>{
    //semantic forms automatically refreshing
    e.preventDefault()
    // Call a function to add contact to state
    // you can only update state in a component where state is actually defined.  
    // we created the addContact function that gets passed into the form in the App.js
     this.props.add(this.state);
     this.setState({name: "", phone: ""})
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