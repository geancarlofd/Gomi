import React, { Component, useState, useEffect } from 'react';
import gomi from "../../assets/telaDescarte/gomi.png";
import gomiNome from "../../assets/telaDescarte/gomiNome.png";
import fotoPerfil from "../../assets/perfil/gisele.jpg";
import Menu from './HeadersPerfil/headersPerfil.js';
import modalPerfil from './modalPerfil/modalPerfil';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Button, Modal, ModalFooter,
	ModalHeader, ModalBody
} from "reactstrap";

import './perfil.css';

import { Link } from 'react-router-dom';

function Perfil() {

    useEffect(() => {
      document.title = 'Perfil'})

      
        // Modal open state
        const[modal, setModal] = useState(false)
      
        // Toggle for Modal
        const toggle = () => setModal(!modal);
      

      function ModalPerfil() {
        console.log("Abc")
        return (
          <div style={{
            display: 'block', width: 700, padding: 30
          }}>
            <h4>Meus Amigos</h4>
            <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader
                toggle={toggle}>Sample Modal Title</ModalHeader>
              <ModalBody>
                Testando 1.. 2
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={toggle}>Fechar</Button>
              </ModalFooter>
            </Modal>
          </div >
        );
      }

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
                  <p className="text-dados-perfil-resposta">Geancarlo Ferreira Dahe</p> 
                </td>
              </tr>

              <tr>
                <td>
                  <p className="text-dados-perfil">Idade: </p> 
                </td>
                <td>
                  <p className="text-dados-perfil-resposta">20</p> 
                </td>
              </tr>

              <tr>
                <td>
                  <p className="text-dados-perfil">Email: </p> 
                </td>
                <td>
                  <p className="text-dados-perfil-resposta">geancarlofd@gmail.com</p> 
                </td>
              </tr>
            </table>

            <table  className="table-tamanho-perfil-amigos">
              <tr>
                <td>
                  <p className="text-dados-perfil">Amigos:</p> 
                </td>
                <td>
                  <button className="text-dados-perfil-resposta-amigos" onClick={ModalPerfil}>Mais amigos</button>
                </td>
              </tr>
            </table>
          </div>

        </div>
      </div>
    )
  }


export default Perfil;