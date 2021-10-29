import React, { useEffect, useState, Component } from 'react';
import { Link, useHistory } from 'react-router-dom';
import firebase from '../../firebase';


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
            timelineeeeee
            <button onClick={sair}>Sair</button> <br />
        </div>
    )
}


export default Timeline