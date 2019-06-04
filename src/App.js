import React from 'react';
import Contacts from "./Contacts"
import { Container, Header, Button, Icon, Divider } from "semantic-ui-react"


class App extends React.Component{
    state = {
      contacts: [
        {id: 1, firstName: "Jerry", phone: "801-234-3243"},
        {id: 2, firstName: "Tom", phone: "801-745-3263"},
        {id: 3, firstName: "Marry", phone: "801-339-9734"},
      ]
    };
  
  
  render(){
    return(
      <Container textAlign="center">
        <Header as ="h1" textAlign='center'>
        <Icon name = "address book outline"color = "black"circular/>
        </Header>
        <Header as="h1" color = "red"> React Contact List</Header>
        <Divider/>
        <Contacts contactList={this.state.contacts} />
        <Button primary>Button</Button>
      </Container>
    )
  }
  
}

export default App;
