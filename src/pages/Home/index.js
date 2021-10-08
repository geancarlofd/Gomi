import React from 'react';
import {Link} from 'react-router-dom'

import './index.css'
import cuteImage from './cute.jpg';

function Home(){
    return(
        <div>
            <div className="box">
                <h2>Home</h2>

                <Link className="txt" to="/sobre">Sobre</Link>
                <Link className="txt" to="/contato">Contato</Link><br></br>
                <img src={cuteImage} alt="cuteee"/>
            </div>
            
        </div>
    )
}

export default Home