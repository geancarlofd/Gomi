import React, { useEffect, useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../../firebase';

import "../Postagem/postagem.css";

import imgPost from "../../../assets/postagem/imagemPost1.jpg";
import perfil from "../../../assets/postagem/perfil1.jpg";


const Postagem = ({docId, nome, corpoTexto, dataHora, flg_img}) => {
    const [imgURL, setImgURL] = useState('');

    function GetImagem() {
        //console.log(flag_img)
        
        if (flg_img) {
            firebase.storage().ref("postagens").child(docId).getDownloadURL().then((url) => {
                 setImgURL(url)
                 //console.log("url: "+imgURL)
            });
            return (<div><img className="imgPost" src={imgURL}/></div>)
        }
        return("DOOOOCE")
    }

    return (
        <div>
            <table className="box-postagem">{/*POSTAGEM*/}

                <tr>{/*Superior - Foto, Nome, Data e Hora*/}
                    <td className="td-ImgName" colspan="2"><img className="imgPerfil" src={perfil}/>{nome}</td>
                    <td className="td-DataHora"><p className="p-DataHora">{dataHora}</p></td>
                </tr>
                
                <tr>{/*Corpo - Texto*/}
                    <td colspan="3" className="td-corpoTexto">{corpoTexto}</td>
                </tr>
                <tr>{/*Corpo - Imagem*/}
                    <td colspan="3"><GetImagem/></td>
                </tr>
                <tr className="tr-CurtidasCom">{/*Inferior - Curtidas e Comentários*/}
                    <td>Curtidas: 28</td>
                    <td>Comentários: 5</td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}

export default Postagem