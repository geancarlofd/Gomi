import React, { useEffect, useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase';

import Postagem from '../timeline/Postagem/index.js';

import NovaPostagem from '../timeline/NovaPostagem/index.js';



function Timeline() {
    const history = useHistory();
    const [redirectSair, setRedirectSair] = useState(false);


    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        document.title = `Gomi - Timeline`;

        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                history.push('/')
            }
            else {

            }
        });
    });

    async function sair() {
        await firebase.auth().signOut();
        setRedirectSair(true)
    }

    return (
        <div>
            <NovaPostagem />


            <Postagem />
            <Postagem />
            <Postagem />
            <Postagem />
            <Postagem />
            <button onClick={sair}>Sair</button> <br />
        </div>
    )
}


export default Timeline