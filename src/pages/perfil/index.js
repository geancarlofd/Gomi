import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../../firebase'
import { useHistory } from 'react-router-dom';

import gomi from "../../assets/telaDescarte/gomi.png";
import gomiNome from "../../assets/telaDescarte/gomiNome.png";
import fotoPerfil from "../../assets/perfil/perfil1.jpg";
import Menu from './HeadersPerfil/headersPerfil.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './perfil.css';

function Perfil() {
  const [nomeUser, setNomeUser] = useState('')
  const [emailUser, setEmailUser] = useState('')

  const history = useHistory();

    useEffect(() => {

      document.title = 'Gomi - Perfil'

      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          history.push('/')
        }
        else {
          setNomeUser(user.displayName)
          setEmailUser(user.email)
        }
      })

    })
      
    return (
      <div>
        <div className="body">
          <div className="bcg-cabecalho">
            <img className="imgGomi" src={gomi}></img>
            <img className="imgGomiNome" src={gomiNome}></img>
            <Menu />
          </div>
          
          <div className="img-ranking"></div>

          {/* Conteúdo do Perfil */} 

          <div>
            <table className="table-foto-perfil">
              <tr>
                <img className="imgFotoPerfil" src={fotoPerfil}></img>
              </tr>
            </table>

            <table  className="table-tamanho-perfil">
              <tr>
                <td>
                  <p className="text-dados-perfil">Nome: </p> 
                </td>
                <td>
                  <p className="text-dados-perfil-resposta">{nomeUser}</p> 
                </td>
              </tr>

              <tr>
                <td>
                  <p className="text-dados-perfil">Email: </p> 
                </td>
                <td>
                  <p className="text-dados-perfil-resposta">{emailUser}</p> 
                </td>
              </tr>
            </table>

            <table  className="table-tamanho-perfil-amigos">
              <tr>
                <td>
                  <p className="text-dados-perfil">Amigos:</p> 
                </td>
                <td>
                  <Link to='/modalPerfil'><button className="text-dados-perfil-resposta-amigos">Mais Amigos</button></Link>
                </td>
              </tr>
            </table>
          </div>

        </div>
      </div>
    )
  }


export default Perfil;