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
  const[uidUser, setUidUser] = useState('')
  const[nomeUser, setNomeUser] = useState('')

  const history = useHistory();

  useEffect(() =>{
    document.title = 'Tela de Descarte';

    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
          history.push('/')
      }
      else {
          setUidUser(user.uid)
          setNomeUser(user.displayName)
          console.log(user)
      }
  })
  })

  return (

    /* Menu Tela de Descarte */
    <div className="body">

      <div className="bcg-cabecalho">
        <img className="imgGomi" src={gomi}></img>
        <img className="imgGomiNome" src={gomiNome}></img>
        <Menu />
      </div>

      <div>
        <br />
        <p className="text-descarte">Esta tela é referente a Tela de Descarte, onde você irá cadastrar seus descartes. </p>
        <br />
        <FormularioDescarte nomeUser={nomeUser} uidUser={uidUser}/>
      </div>

      <br />

      <div>
        <ListaDescarte />
      </div>


    </div>
  )
}



export default TelaDescarte;