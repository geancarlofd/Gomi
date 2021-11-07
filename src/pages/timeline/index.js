import React, { useEffect, useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase';

import Postagem from '../timeline/Postagem/index.js';

import NovaPostagem from '../timeline/NovaPostagem/index.js';



function Timeline() {
    const history = useHistory();
    const [redirectSair, setRedirectSair] = useState(false);
    const [nomeUser, setNomeUser] = useState('inio');
    const [uidUser, setUidUser] = useState('');
    const [feed, setFeed] = useState([]);


    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        document.title = `Gomi - Timeline`;

        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                history.push('/')
            }
            else {
                setUidUser(user.uid)
                setNomeUser(user.displayName)
            }
        })

        firebase.firestore().collection('postagens').onSnapshot((snapshot) =>{
            setFeed(snapshot.docs.map((item) => ({ id: item.id, post: item.data() })));
        });
    });

    

    async function sair() {
        await firebase.auth().signOut();
        setRedirectSair(true)
    }


    return (
        <div>
            <button onClick={sair}>Sair</button> <br />
            <NovaPostagem uid={uidUser} nome={nomeUser}/>
            {feed.map(({ id, post }) => (
                <Postagem
                    key={id}
                    id={id}
                    nome={post.nome}
                    corpoTexto={post.corpoTexto}
                    dataHora={post.dataHora}
                    //corpoTexto = {post.corpoTexto}
                />
            ))}
        </div>
    )
}


export default Timeline