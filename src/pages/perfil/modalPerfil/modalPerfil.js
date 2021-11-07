import React, { useEffect, useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Button, Modal, ModalFooter,
	ModalHeader, ModalBody
} from "reactstrap"

function ModalPerfil() {

	// Modal open state
	const[modal, setModal] = useState(false)

	// Toggle for Modal
	const toggle = () => setModal(!modal);

	return (
		<div style={{
			display: 'block', width: 700, padding: 30
		}}>
			<h4>Meus Amigos</h4>
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader
					toggle={toggle}>Sample Modal Title</ModalHeader>
				<ModalBody>
					Testando 1.. 2
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={toggle}>Fechar</Button>
				</ModalFooter>
			</Modal>
		</div >
	);
}

export default ModalPerfil;
