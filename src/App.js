import React from 'react';
import Contacts from "./Contacts"
import { Container, Header, Button, Icon, Divider } from "semantic-ui-react"
import ContactForm from "./ContactForm"


class App extends React.Component{
    state = {
      contacts: [
        {id: 1, name: "Jerry", phone: "801-234-3243"},
        {id: 2, name: "Tom", phone: "801-745-3263"},
        {id: 3, name: "Marry", phone: "801-339-9734"},
      ]
    };
    getId = () => {
      return Math.floor((1 + Math.random())*1000)
    }
  addContact = (contactData) =>{
    let contact = { id: this.getId,...contactData, }
    this.setState({contacts: [...this.state.contacts, contact]})
  }
  
  render(){
    return(
      <Container style  = {{paddingTop: "25px"}}textAlign="center">
        <Header as ="h1" textAlign='center'>
        <Icon name = "address book outline"color = "black"circular/>
        </Header>
        <Header as="h1" color = "blue"> React Contact List</Header>
        <Divider/>
        <ContactForm add={this.addContact}/>
        <Divider/>
        <Contacts contactList={this.state.contacts} />
      </Container>
    )
  }
  
}

export default App;
