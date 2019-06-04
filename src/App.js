import React from 'react';
import { Container, Header, Button } from "semantic-ui-react"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      contacts: [
        {id: 1, firstName: "Jerry", phone: "801-234-3243"},
        {id: 2, firstName: "Tom", phone: "801-745-3263"},
        {id: 3, firstName: "Marry", phone: "801-339-9734"},
      ]
    };
  }
  
  render(){
    return(
      <Container>
        <Header as ="h1" color = "red">React Contact List</Header>
        <Button primary>Button</Button>
      </Container>
    )
  }
  
}

export default App;
