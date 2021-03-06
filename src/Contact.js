import React from "react"
import { Button, Table, Icon} from "semantic-ui-react"

const Contact = ({id, name, phone,remove, }) =>(

<Table.Row>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell textAlign='center'>{phone}</Table.Cell>
            <Table.Cell textAlign= 'center'>
              <Button color="red" icon onClick={() => remove(id)}>
                <Icon name = "delete"/>
            
              </Button>
            </Table.Cell>
          </Table.Row> 
)
export default Contact
