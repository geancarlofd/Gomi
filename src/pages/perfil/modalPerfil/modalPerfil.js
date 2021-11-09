import React from 'react';
import {Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './modalPerfil.css';
import '../../../rotas';

import gomi from "../../../assets/telaDescarte/gomi.png";
import gomiNome from "../../../assets/telaDescarte/gomiNome.png";
import seta from "../../../assets/cadastrar/seta.png";
import Menu from "../HeadersPerfil/headersPerfil.js";

function ModalPerfil() {

	return (
		<div>
			<div className="body">
				<div className="bcg-cabecalho">
					<img className="imgGomi" src={gomi}></img>
					<img className="imgGomiNome" src={gomiNome}></img>
					<Menu />
				</div>
			
			<Link to="/perfil"><img className="seta" src={seta}></img></Link>
			<div>
				<table className="table-tamanho-perfil-modal">
					<tr>
						<th>
							Lista Amigos
						</th>
					</tr>

					<tr>
						<td>
							<img className="imgGomi" src={gomi}></img>
						</td>
						<td>
							Lixin
						</td>
					</tr>
				</table>
			</div>

			</div>
		</div>
	);
}

export default ModalPerfil;
