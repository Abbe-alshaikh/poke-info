import { Form, Container, Col} from 'react-bootstrap'
import { Button} from 'react-bootstrap'
import React from 'react'


export default function Search(props){

    const [search, setSearch]= React.useState('');

    return (
      <Container>
          <h1>{search}</h1>
          <Form className= "mt-2">
              <Form.Row className= "align-items-center">
                <Col sm = {10} className= "my-1">
                    <Form.Control
                    onChange = {(e)=> setSearch(e.target.value)}
                        placeholder = "Search for Pokemon"/>
                </Col>
                <Col sm = {2} className = "my-1">
                    <Button onClick= {(e)=> props.getPokemon(search.toLowerCase())}> Search </Button>
                </Col>
              </Form.Row>
          </Form>
      </Container>
    )
}