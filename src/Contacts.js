import React from "react"; //giving access to JSX
import Contact from "./Contact"
import { Table, } from "semantic-ui-react"


const Contacts = ({contactList,}) => (
  // render data here...
  <Table celled padded>
    <Table.Header>
    <Table.Row>
      <Table.HeaderCell>First Name</Table.HeaderCell>
      <Table.HeaderCell textAlign= 'center'>Phone</Table.HeaderCell>
      <Table.HeaderCell textAlign= 'center'>Options</Table.HeaderCell>
    </Table.Row>
    </Table.Header>
    <Table.Body>
    {
        contactList.map( contact => ( 
          <Contact key={contact.id} {...contact}/>
        ))
      }
    </Table.Body>
      
  </Table>
)

export default Contacts