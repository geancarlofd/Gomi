import React, { Component, useEffect, useState } from 'react';
import firebase from '../../firebase'
import { Link, useHistory } from 'react-router-dom';

import "./index.css";

import gomi from "../../assets/telaDescarte/gomi.png";
import gomiNome from "../../assets/telaDescarte/gomiNome.png";

import Menu from './HeadersDescarte/headersDescarte.js';
import FormularioDescarte from './FormularioDescarte/formularioDescarte.js';
import ListaDescarte from './ListaDescarte/listaDescarte.js';




function TelaDescarte() {
  const [uidUser, setUidUser] = useState('')
  const [nomeUser, setNomeUser] = useState('')
  const [descartes, setDescarte] = useState(false)
  const [feedDescarte, setFeedDescarte] = useState([])


  const history = useHistory();

  useEffect(() => {
    document.title = 'Tela de Descarte';

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push('/')
      }
      else {
        setUidUser(user.uid)
        setNomeUser(user.displayName)
        console.log('Uid: ' + uidUser + ' Nome: ' + nomeUser)
      }

      if (!descartes) {
        populaDescarte(user.uid)
      }
    })
  })

  function populaDescarte(uid) {
    let feedArray = []
    firebase.firestore().collection("descartes").where("uid", "==", uid)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          //setFeedDescartes(doc.map((item) => ({ id: item.id, descarte: item.data() })));
          feedArray.push({ id: doc.id, descarte: doc.data() })
        });
      })
    setFeedDescarte(feedArray)
    console.log(feedArray)
    setDescarte(true)
  }

  return (

    /* Menu Tela de Descarte */
    <div className="gradientGeral">
    <div className="body" >

      <div className="bcg-cabecalho">
        <img className="imgGomi" src={gomi}></img>
        <img className="imgGomiNome" src={gomiNome}></img>
        <Menu />
      </div>

      <div>
        <br />
        <p className="text-descarte">Esta tela é referente a Tela de Descarte, onde você irá cadastrar seus descartes. </p>
        <br />
        <FormularioDescarte nomeUser={nomeUser} uidUser={uidUser} />
      </div>

      <br />
      {console.log(feedDescarte)}
      <div>
        {feedDescarte.forEach(({ id, descarte }) => (
          <ListaDescarte
            key={id}
            docId={id}
            nomeLixoDescarte={descarte.nomeLixoDescarte}
            qtdeDescarte={descarte.qtdeDescarte}
            formaDescarte={descarte.formaDescarte}
            tipoLixoDescarte={descarte.tipoLixoDescarte}
            dataDescarte={descarte.dataDescarte}
          />
        ))}

          <ListaDescarte
            key="teste"
            docId="teste"
            nomeLixoDescarte="teste"
            qtdeDescarte="teste"
            formaDescarte="teste"
            tipoLixoDescarte="teste"
            dataDescarte="teste"
          />
          <ListaDescarte
            key="teste"
            docId="teste"
            nomeLixoDescarte="teste"
            qtdeDescarte="teste"
            formaDescarte="teste"
            tipoLixoDescarte="teste"
            dataDescarte="teste"
          />
          <ListaDescarte
            key="teste"
            docId="teste"
            nomeLixoDescarte="teste"
            qtdeDescarte="teste"
            formaDescarte="teste"
            tipoLixoDescarte="teste"
            dataDescarte="teste"
          />
      </div>
    </div>
    </div >
  )
}



export default TelaDescarte;