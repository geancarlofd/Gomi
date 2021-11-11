import React, { useEffect, useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Row, } from 'reactstrap';
import "./formularioDescarte.css";
import firebase from './../../../firebase';


const FormularioDescarte = (props) => {


  const [nomeUser, setNomeUser] = useState("");
  const [uidUser, setUidUser] = useState("");

  const [nomeLixoDescarte, setNomeLixoDescarte] = useState("");
  const [qtdeDescarte, setQtdeDescarte] = useState("");
  const [dataDescarte, setDataDescarte] = useState("");
  const [tipoLixoDescarte, setTipoLixoDescarte] = useState("Lixo Orgânico");
  const [formaDescarte, setFormaDescarte] = useState("Lixo Orgânico");
  const [tipoReciclavelDescarte, setTipoReciclavelDescarte] = useState("");
  const [pontuacao, setPontuacao] = useState(-5);
  const [teste, setTeste] = useState(false);


 /* useEffect(() =>{
    /*if(teste){
      console.log(tipoLixoDescarte+" "+formaDescarte)
      if (tipoLixoDescarte == formaDescarte) {
        setPontuacao(5)
        console.log(pontuacao)
      }else {
        setPontuacao(-5)
        console.log(pontuacao)
      }
    }
  }, [teste])*/

  const mudaForma = (e) =>{
    setTeste(true)
    console.log(tipoLixoDescarte+" "+e.target.value)
    setFormaDescarte(e.target.value)
    console.log('aNTES'+pontuacao)

    if (tipoLixoDescarte === e.target.value) {
      setPontuacao(-5)
      console.log(pontuacao)
    } else {
      setPontuacao(5)
      console.log(pontuacao)
    }
  }
  const mudaTipo = (e) => {
    setTeste(true)
    console.log(e.target.value + " " + formaDescarte)
    setTipoLixoDescarte(e.target.value)
    console.log("ANTES"+pontuacao)
    if (e.target.value === formaDescarte) {
      setPontuacao(-5)
      console.log(pontuacao)
    } else {
      setPontuacao(5)
      console.log(pontuacao)
    }
  }

  /*const mudaPontuacao =(e) =>{
    console.log(tipoLixoDescarte+" "+formaDescarte)
    if (tipoLixoDescarte === formaDescarte) {
      setPontuacao(5)
      console.log(pontuacao)
    } else {
      setPontuacao(-5)
      console.log(pontuacao)
    }
  }*/


  async function validarCampos() {
    var vetor = [nomeLixoDescarte, qtdeDescarte, dataDescarte, tipoLixoDescarte, formaDescarte];

    for (var x = 0; x < vetor.length; x++) {
      if (vetor[0].length == 0) {
        return false;
      }
    }

    return true;
  }

  async function salvarDescarte() {
    if (validarCampos()) {
      setTeste(true)
      await firebase.firestore().collection("descartes").add({
        uid: props.uidUser,
        nome: props.nomeUser,
        nomeLixoDescarte: nomeLixoDescarte,
        qtdeDescarte: qtdeDescarte,
        dataDescarte: dataDescarte,
        tipoLixoDescarte: tipoLixoDescarte,
        formaDescarte: formaDescarte,
        tipoReciclavelDescarte: tipoReciclavelDescarte
      }).then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        console.log(props.uidUser)
        var docRef = firebase.firestore().collection("dadosUsuario").doc(props.uidUser);
        
        docRef.get().then((doc) => {
          if (doc.exists) {
            let pontosUser = doc.data().pontos;
            let auxPontos
            console.log(teste)
            if(teste == false){
              auxPontos = 5
            }
            else{
              auxPontos = pontuacao
            }
            console.log(auxPontos)
            pontosUser += auxPontos

            docRef.update({ pontos: pontosUser})
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }

        }).catch((error) => {
          console.log("Error getting document:", error);
        });
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });

    } else {
      alert('Campos inválidos')
      firebase.firestore().collection("dadosUsuarios").doc(uidUser).get().then((doc) => {
        console.log(doc.data())
      })
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
              <Input type="text" name="text" placeholder="Nome do lixo" onChange={(e) => { setNomeLixoDescarte(e.target.value) }} />
            </Col>
          </FormGroup>
        </td>

        <td /* Campo Quantidade */ >
          <FormGroup row>
            <Col sm={30}>
              <Input type="number" name="number" placeholder="Quantidade" onChange={(e) => { setQtdeDescarte(e.target.value) }} />
            </Col>
          </FormGroup>
        </td>

        <td /* Campo Data */>
          <FormGroup row>
            <Col sm={25}>
              <Input type="date" name="date" placeholder="Data" onChange={(e) => { setDataDescarte(e.target.value) }} />
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
              <Input type="select" onChange={(e) => { mudaTipo(e) }}>
                <option select value="Lixo Orgânico">Lixo Orgânico</option>
                <option value="Lixo Reciclável">Lixo Reciclável</option>
              </Input>
            </Col>
          </FormGroup>
        </td>

        <td /* Campo Tipo do Lixo */>
          <FormGroup row>
            <Col sm={30}>
              <Input type="select" onChange={(e) => { mudaForma(e) }}>
                <option select value="Lixo Orgânico" >Lixo Orgânico</option>
                <option value="Lixo Reciclável" >Lixo Reciclável</option>
              </Input>
            </Col>
          </FormGroup>
        </td>
      </tr>

      <br />

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