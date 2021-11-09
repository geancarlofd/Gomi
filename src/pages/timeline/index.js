import React, { useEffect, useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase';

import Postagem from '../timeline/Postagem/index.js';

import NovaPostagem from '../timeline/NovaPostagem/index.js';



function Timeline() {
    const history = useHistory();
    const [nomeUser, setNomeUser] = useState('inio');
    const [uidUser, setUidUser] = useState('');
    const [feed, setFeed] = useState([]);
    const [postagens, setPostagens] = useState(false);


    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        document.title = `Gomi - Timeline`;

        const currentUser = firebase.auth().currentUser;
        if(currentUser){
            setUidUser(currentUser.uid)
            setNomeUser(currentUser.displayName)
        }

        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                history.push('/')
            }
        })

        if (!postagens){
            firebase.firestore().collection('postagens').onSnapshot((snapshot) => {
                setFeed(snapshot.docs.map((item) => ({ id: item.id, post: item.data() })));
            });
            setPostagens(true)
        }
        

    });
    

    async function sair() {
        await firebase.auth().signOut();
    }

    return (
        <div>
            <button onClick={sair}>Sair</button> <br />
            <NovaPostagem uid={uidUser} nome={nomeUser}/>
            {feed.map(({ id, post }) => (
                <Postagem
                    key={id}
                    docId={id}
                    nome={post.nome}
                    corpoTexto={post.corpoTexto}
                    dataHora={post.dataHora}
                    flg_img = {post.flg_img}
                />
            ))}
        </div>
    )
}


export default Timeline