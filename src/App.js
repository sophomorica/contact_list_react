import React from 'react';
import Contacts from "./Contacts"
import { Container, Header, Segment, Button, Icon, Divider } from "semantic-ui-react"
import ContactForm from "./ContactForm"


class App extends React.Component{
    state = {
      contacts: [
        {id: 1, name: "Jerry", phone: "801-234-3243"},
        {id: 2, name: "Tom", phone: "801-745-3263"},
        {id: 3, name: "Marry", phone: "801-339-9734"},
      ],
      showForm: true, 
    };
    getId = () => {
      return Math.floor((1 + Math.random())*1000)
    }
  addContact = (contactData) =>{
    let contact = { id: this.getId(),...contactData, }
    this.setState({contacts: [...this.state.contacts, contact]})
  }
  removeContact = (id) =>{
    const contacts = this.state.contacts.filter(contact => {
      if (contact.id !== id)
      return contact;
    })
    this.setState({contacts,})
  }
  toggleForm = () =>this.setState({showForm: !this.state.showForm,})
  
  render(){
    return(
      <Container style  = {{paddingTop: "25px"}}textAlign="center">
        <Header as ="h1" textAlign='center'>
        <Icon name = "address book outline"color = "black"circular/>
        </Header>
        <Header as="h1" color = "blue"> React Contact List</Header>
        <Divider/>
        <Segment basic>
          <Button icon color="blue"onClick={this.toggleForm}>
            <Icon name={this.state.showForm ? "angle double up":"angle double down" }/>
          </Button>
          {this.state.showForm ?  <ContactForm add={this.addContact}/> : null}
       
        </Segment>
        <Divider/>
        <Contacts 
        contactList={this.state.contacts} 
        remove={this.removeContact} />
      
      </Container>
    )
  }
  
}

export default App;
