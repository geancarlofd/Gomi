import React, { useEffect, useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from "../../../firebase"

import "../NovaPostagem/novaPostagem.css";


const NovaPostagem = (props) => {

    const [corpoTexto, setCorpoTexto] = useState('');
    const [corpoImg, setCorpoImg] = useState('');
    const [dataHoraAtual, setDataHoraAtual] = useState('');

    function DataHora(){
        var datahora = new Date();
        var data = datahora.getHours() + ":" + datahora.getMinutes() + "   " + datahora.getDay() + "/" + (datahora.getMonth()+1)+"/"+datahora.getFullYear();
        console.log(data);
        setDataHoraAtual(data)
    }

    function validarCampos(){
        if (corpoTexto == null || corpoTexto == " "){
            return false
        }
        return true
    }

    async function salvarPostagem(){
        if(validarCampos()){
            DataHora()
            await firebase.firestore().collection("postagens").add({
                uid: props.uid,
                nome: props.nome,
                corpoTexto: corpoTexto,
                flg_img: 0,
                dataHora: dataHoraAtual,
                curtidas: 0
                //colocar comentarios
            }).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });
        }
    }

    return (
        <div>
            <table className="box-novaPostagem">{/*POSTAGEM*/}
                <tr>{/*Cabecalho*/}
                    <td className='td-titulo'><label className="label-titulo">Faça uma nova postagem</label></td>
                </tr>
                <tr>{/*Inserir Corpo*/}
                    <td colspan="2"><textarea className="textArea-corpoPost" onChange={(e) => { setCorpoTexto(e.target.value) }}></textarea></td>
                </tr>
                <tr>
                    <td><input type="file" className="inpt-arquivoPost" onChange={(e) => { setCorpoImg(e.target.value) }}/></td>
                    <td className="td-btnPostar"><button className="btn-postar" onClick={salvarPostagem}>Postar</button></td>
                </tr>
            </table>
        </div>
    )
}


export default NovaPostagem