import React from "react"
import { Button, Table, Icon} from "semantic-ui-react"

const Contact = ({name, phone,}) =>(

<Table.Row>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell textAlign='center'>{phone}</Table.Cell>
            <Table.Cell textAlign= 'center'>
              <Button secondary >
                <Icon name = "delete"/>
            
              </Button>
            </Table.Cell>
          </Table.Row> 
)
export default Contact
