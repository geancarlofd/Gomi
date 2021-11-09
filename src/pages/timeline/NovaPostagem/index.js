import React, { useEffect, useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from "../../../firebase"

import "../NovaPostagem/novaPostagem.css";


const NovaPostagem = (props) => {

    const [corpoTexto, setCorpoTexto] = useState('');
    const [corpoImg, setCorpoImg] = useState('');
    const [verificadorImagem, setVerificadorImagem] = useState(false);
    const [dataHoraAtual, setDataHoraAtual] = useState('');

    function DataHora(){
        var datahora = new Date();
        var data = datahora.getHours() + ":" + datahora.getMinutes() + "   " + datahora.getDate() + "/" + (datahora.getMonth()+1)+"/"+datahora.getFullYear();
        console.log(data)
        return data;
    }

    function validarCampos(){
        if (corpoTexto == null || corpoTexto == ""){
            return false
        }
        return true
    }

    function imagem(e){
        setCorpoImg(e.target.files[0])
        setVerificadorImagem(true);
    }

    async function salvarPostagem(){
        if(validarCampos()){
            DataHora()
            await firebase.firestore().collection("postagens").add({
                uid: props.uid,
                nome: props.nome,
                corpoTexto: corpoTexto,
                flg_img: verificadorImagem,
                dataHora: DataHora(),
                curtidas: 0
                //colocar comentarios
            }).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                if (verificadorImagem){
                    firebase.storage().ref("postagens").child(docRef.id).put(corpoImg).then((response) => {
                        console.log("Upload feito!")
                    });
                }
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
                    <td><input type="file" className="inpt-arquivoPost" onChange={(e) => imagem(e)}/></td>
                    <td className="td-btnPostar"><button className="btn-postar" onClick={salvarPostagem}>Postar</button></td>
                </tr>
            </table>
        </div>
    )
}


export default NovaPostagem