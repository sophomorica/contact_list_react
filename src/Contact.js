import React from "react"
import { Button, Table, Icon} from "semantic-ui-react"

const Contact = ({firstName, phone,}) =>(

<Table.Row>
            <Table.Cell>{firstName}</Table.Cell>
            <Table.Cell textAlign='center'>{phone}</Table.Cell>
            <Table.Cell textAlign= 'center'>
              <Button secondary >
                <Icon name = "delete"/>
            
              </Button>
            </Table.Cell>
          </Table.Row> 
)
export default Contact
