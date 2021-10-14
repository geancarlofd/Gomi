import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, } from 'reactstrap';
import "./formularioDescarte.css";

const FormularioDescarte = (props) => {

  return (

    //Modal com as opções de descarte 

    <table cellPadding="10" className="table-tamanho">

      <tr>
        <th rowSpan="1" className="table-titulo">Nome do lixo descartado</th>  
        <th rowSpan="1" className="table-titulo">Quantidade</th>
        <th rowSpan="1" className="table-titulo">Data</th> 
      </tr>
    
     <tr>
       <td /* Campo Nome do Lixo */>    
          <FormGroup row>
            <Col sm={30}>
              <Input type="text" name="text" placeholder="Nome do lixo" />
            </Col>
          </FormGroup>
       </td>  

        <td /* Campo Quantidade */ >
          <FormGroup row>
              <Col sm={30}>
                <Input type="number" name="number" placeholder="Quantidade" />
              </Col>
            </FormGroup>
        </td>  

        <td /* Campo Data */> 
          <FormGroup row>
              <Col sm={8}>
                <Input type="date" name="date" placeholder="Data" />
              </Col>
            </FormGroup>
        </td>
     </tr>

      <tr>
        <th rowSpan="1" className="table-titulo">Tipo do Lixo</th>
        <th rowSpan="1" className="table-titulo">Forma de Descarte</th>
      </tr>

      <tr>
        <td /* Campo Forma de Descarte */>
            <FormGroup row>
              <Col sm={30}>
                <Input type="select" name="select" id="exampleSelect2">
                  <option id="1">Lixo Orgânico</option>
                  <option id="2">Lixo Reciclável</option>
                </Input>
              </Col>
            </FormGroup>
        </td>

        <td /* Campo Tipo do Lixo */>
          <FormGroup row>
            <Col sm={30}>
              <Input type="select" name="select" id="exampleSelect2">
                <option id="1">Tipo 1</option>
                <option id="2">Tipo 2</option>
                <option id="3">Tipo 3</option>
                <option id="4">Tipo 4</option>
              </Input>
            </Col>
          </FormGroup>
        </td>
      </tr>
          
      <br/>

      <tr>
        <td /* Campo Botão Enviar */>
         <button className="btn-salvar">Salvar</button>
        </td>
      </tr>
    </table>
    
  );
}



export default FormularioDescarte;