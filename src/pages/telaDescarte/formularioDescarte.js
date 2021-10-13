import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, } from 'reactstrap';

const FormularioDescarte = (props) => {
  return (

    //Modal com as opções de descarte 

    <table cellPadding="15" >

      <tr>
        <th rowSpan="1">Nome do lixo descartado</th> &nbsp; &nbsp; &nbsp;
        <th rowSpan="1">Quantitade</th> &nbsp; &nbsp; &nbsp;
        <th rowSpan="1">Data</th> &nbsp; &nbsp; &nbsp;
      </tr>
    
     <tr>
       <td /* Campo Nome do Lixo */ >    
          <FormGroup row>
            <Col sm={20}>
              <Input type="text" name="text" placeholder="Nome do lixo" />
            </Col>
          </FormGroup>
       </td>

      <td colSpan="20"></td>

        <td /* Campo Quantidade */ >
          <FormGroup row>
            <Col sm={7}>
              <Input type="number" name="number" placeholder="Quantidade" />
            </Col>
          </FormGroup> <br/> 
        </td>

        <td colSpan="20"></td>

        <td /* Campo Data */> 
          <FormGroup>
            <Col sm={1}>
                <Input
                type="date"
                name="date"
                id="date"
                placeholder="Data"/>
            </Col>
          </FormGroup> 
        </td>
     </tr>
  

      <tr>
        <th>Tipo do Lixo</th>
      </tr>

      <tr>
        <td /* Campo Tipo do Lixo*/>
          <FormGroup row>
            <Col sm={20}>
              <Input type="select" name="select" id="exampleSelect2">
                <option id="1">Lixo Reciclável</option>
                <option id="2">Lixo Orgânico</option>
              </Input>
            </Col>
          </FormGroup>
        </td>
      </tr>
          
<br/>
      <tr>
        <td /* Campo Botão Enviar*/>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button>Enviar</Button>
            </Col>
          </FormGroup>
        </td>
      </tr>

    </table>
    
  );
}



export default FormularioDescarte;