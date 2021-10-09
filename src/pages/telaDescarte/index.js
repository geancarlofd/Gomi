import React, { Component } from 'react';
import "./index.css";
import "./headers.js";
import gomi from "../../assets/telaDescarte/gomi.png"
import gomiNome from "../../assets/telaDescarte/gomiNome.png"
import Menu from './headers.js';
import Example from './carrossel.js';



class App extends Component{

    constructor(props){
      super(props);

      this.state = {

      }
    }

    componentDidMount() {
        document.title = 'Tela de Descarte';
    }

    render(){
      return(
        <div className="body">

          <div className="fundo">

            <img className="imgGomi" src={gomi}></img>
            <img className="imgGomiNome" src={gomiNome}></img>
            <Menu />
            <Example />
          </div>

            
        </div>  
      )
    }
}



export default App;