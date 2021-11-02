import React, { useEffect, useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';

import "../NovaPostagem/novaPostagem.css";


const NovaPostagem = (props) => {

    return (
        <div>
            <table className="box-novaPostagem">{/*POSTAGEM*/}
                <tr>{/*Cabecalho*/}
                    <td><label>Nova Postagem</label></td>
                </tr>
                <tr>{/*Inserir Corpo*/}
                    <td colspan="2"><textarea></textarea></td>
                </tr>
                <tr>
                    <td><input type="file"/></td>
                    <td><button>Postar</button></td>
                </tr>
            </table>
        </div>
    )
}


export default NovaPostagem