import React, { useEffect, useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, } from 'reactstrap';
import "./formularioDescarte.css";
import firebase from './../../../firebase';

function FormularioDescarte(props) {
  
  const [nomeLixoDescarte, setNomeLixoDescarte] = useState("");
  const [qtdeDescarte, setQtdeDescarte] = useState("");
  const [dataDescarte, setDataDescarte] = useState("");
  const [tipoLixoDescarte, setTipoLixoDescarte] = useState("");
  const [formaDescarte, setFormaDescarte] = useState("");
  const [tipoReciclavelDescarte, setTipoReciclavelDescarte] = useState("");

  async function validarCampos(){
    var vetor = [nomeLixoDescarte, qtdeDescarte, dataDescarte, tipoLixoDescarte, formaDescarte, tipoReciclavelDescarte];

    for(var x = 0; x < vetor.length-1; x++){
      if(vetor[0].length == 0){
        return false;
      }
    }

    if(tipoLixoDescarte == 'Lixo Reciclável' && tipoReciclavelDescarte.length == 0){
      return false;
    }

    if(!Number.isInteger(qtdeDescarte)){
      return false;
    }

    return true;
  }

  async function salvarDescarte()  {
    if(validarCampos()){
      var uid;

      await firebase.auth().signInWithEmailAndPassword("gisele@email.com", "123123")
      .then( async (auth) =>{
        uid = auth.user.uid;
          await firebase.database().ref("descarte").push({nomeLixoDescarte: nomeLixoDescarte, qtdeDescarte: qtdeDescarte, dataDescarte: dataDescarte, tipoLixoDescarte: tipoLixoDescarte, formaDescarte: formaDescarte, tipoReciclavelDescarte: tipoReciclavelDescarte})
          .then((dados) =>{
            console.log(dados);
        })
    })
    } else{
      alert('Campos inválidos')
    };
  };

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
              <Input type="text" name="text" placeholder="Nome do lixo" onChange={(e) => 
                { setNomeLixoDescarte(e.target.value) }}/>
            </Col>
          </FormGroup>
       </td>  

        <td /* Campo Quantidade */ >
          <FormGroup row>
              <Col sm={30}>
                <Input type="number" name="number" placeholder="Quantidade" onChange={(e) => 
                  { setQtdeDescarte(e.target.value) }}/>
              </Col>
            </FormGroup>
        </td>  

        <td /* Campo Data */> 
          <FormGroup row>
              <Col sm={25}>
                <Input type="date" name="date" placeholder="Data" onChange={(e) => 
                  { setDataDescarte(e.target.value) }}/>
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
                <Input type="select" name="select" id="exampleSelect2" onChange={(e) => 
                  { setTipoLixoDescarte(e.target.value) }}>
                  <option id="1">Lixo Orgânico</option>
                  <option id="lixoReciclavel">Lixo Reciclável</option>
                </Input>
              </Col>
            </FormGroup>
        </td>

        <td /* Campo Tipo do Lixo */>
          <FormGroup row>
            <Col sm={30}>
              <Input type="select" name="select" id="exampleSelect2" onChange={(e) => 
                { setFormaDescarte(e.target.value) }}>
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
        <td colSpan="2"></td>
        <td /* Campo Botão Enviar */>
         <button className="btn-salvar" onClick={salvarDescarte}>Salvar</button>
        </td>
      </tr>
    </table>
    
  );
}



export default FormularioDescarte;