import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, } from 'reactstrap';

const FormularioDescarte = (props) => {
  return (
      <div>
    <Form className="body"> 
      <FormGroup row>
        <Label sm={2}>Nome do lixo descartado</Label>
        <Col sm={7}>
          <Input type="text" name="text" placeholder="Nome do lixo" />
        </Col>
      </FormGroup> <br/>
      

      <FormGroup row>
        <Label sm={2}>Quantitade</Label>
        <Col sm={1}>
          <Input type="number" name="number" placeholder="Quantidade" />
        </Col>
      </FormGroup> <br/> 

      <FormGroup>
        <Label for="date" sm={2}>Data</Label>
        <Col sm={1}>
            <Input
            type="date"
            name="date"
            id="date"
            placeholder="Data"/>
        </Col>
      </FormGroup> <br/>


      <FormGroup row>
        <Label for="exampleSelect" sm={2}>Tipo de reciclável</Label>
        <Col sm={10}>
          <Input type="select" name="select" id="exampleSelect2">
            <option id="1">Lixo Reciclável</option>
            <option id="2">Lixo Orgânico</option>
          </Input>
        </Col>
      </FormGroup>

      <br/>

      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button>Submit</Button>
        </Col>
      </FormGroup>
      
    </Form>


    </div>
  );
}



export default FormularioDescarte;