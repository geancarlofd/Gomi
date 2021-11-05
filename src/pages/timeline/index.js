import React, { useEffect, useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase';

import Postagem from '../timeline/Postagem/index.js';

import NovaPostagem from '../timeline/NovaPostagem/index.js';



function Timeline() {
    const history = useHistory();
    const [redirectSair, setRedirectSair] = useState(false);
    const [nomeUser, setNomeUser] = useState('');
    const [uidUser, setUidUser] = useState('');


    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        document.title = `Gomi - Timeline`;
        carregarFeed()

        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                history.push('/')
            }
            else {
                console.log(user)
                setUidUser(user.uid)
                setNomeUser(user.displayName)
            }
        });
    });

    async function sair() {
        await firebase.auth().signOut();
        setRedirectSair(true)
    }

    async function carregarFeed(){
        let postagens = [];
        
        await firebase.firestore().collection('postagens').get().then(querySnapshot => {
                querySnapshot.docs.map(doc => {
                postagens.push(doc.data())
            });
        });

        console.log(postagens);
    }

    const Feed = () => {

        let feed = []
        await firebase.firestore().collection('postagens').get().then(querySnapshot => {
            querySnapshot.docs.map(doc => {
                postagens.push(doc.data())
                feed.push(<Postagem />)
            });
        });

        console.log(postagens);

    }

    return (
        <div>
            <button onClick={sair}>Sair</button> <br />

            <NovaPostagem uid={uidUser} nome={nomeUser}/>


            <Postagem />
            <Postagem />
            <Postagem />
            <Postagem />
            <Postagem />
        </div>
    )
}


export default Timeline