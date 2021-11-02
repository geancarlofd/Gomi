import React, { useEffect, useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';

import "../Postagem/postagem.css";

import perfil from "../../../assets/postagem/perfil1.jpg";
import imgPost from "../../../assets/postagem/imagemPost1.jpg";

const Postagem = (props) => {

    return (
        <div>
            <table className="box-postagem">{/*POSTAGEM*/}
                <tr>{/*Superior - Foto, Nome, Data e Hora*/}
                    <td className="td-ImgName" colspan="2"><img className="imgPerfil" src={perfil}></img>Geancarlo Ferreira Dahle</td>
                    <td className="td-DataHora"><p className="p-DataHora">15:18 - 02/11/2021</p></td>
                </tr>
                <tr>{/*Corpo - Texto*/}
                    <td colspan="3" className="td-corpoTexto">	Lorem ipsum convallis a netus scelerisque bibendum euismod vivamus magna eros felis, praesent quis vulputate sociosqu quisque posuere fringilla donec vitae elit euismod nisl, est felis sagittis nam habitant bibendum litora dapibus consectetur lacinia. bibendum aptent tempor iaculis felis egestas fusce inceptos sed, vitae ad aliquam egestas primis donec fermentum tortor tempor, taciti conubia eleifend pharetra egestas lobortis fermentum. duis ipsum nisi malesuada dapibus viverra integer accumsan proin sed, tincidunt cubilia magna aliquam lorem etiam felis ullamcorper, eros feugiat dictum vivamus tortor dictum imperdiet bibendum. scelerisque ante condimentum egestas commodo malesuada, torquent nibh mattis arcu posuere, elementum eros maecenas sodales. </td>
                </tr>
                <tr>{/*Corpo - Imagem*/}
                    <td colspan="3"><img className="imgPost" src={imgPost}></img></td>
                </tr>
                <tr>{/*Inferior - Curtidas e Comentários*/}
                    <td>Curtidas</td>
                    <td>Comentários</td>
                    <td></td>
                </tr>
            </table>
        </div>
    )
}


export default Postagem