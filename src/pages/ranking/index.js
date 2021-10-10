import React, { Component } from 'react';
import gomi from "../../assets/telaDescarte/gomi.png"
import gomiNome from "../../assets/telaDescarte/gomiNome.png"
import Menu from './headersRanking.js';
class App extends Component{

    constructor(props){
      super(props);
      this.state = {
      }
    }

    componentDidMount() {
      document.title = 'Ranking';
  }

    render(){
      return(
        <div>

            <div className="body">

              <div className="bcg-cabecalho">

                <img className="imgGomi" src={gomi}></img>
                <img className="imgGomiNome" src={gomiNome}></img>
                <Menu />

              </div>
            </div>
        </div>
      )
    }
}

export default App;