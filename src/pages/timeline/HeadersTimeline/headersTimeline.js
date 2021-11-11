import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import '../HeadersTimeline/pointer.css'
import firebase from '../../../firebase';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  async function sair() {
    await firebase.auth().signOut();
  }

  return (
    <div className="menu-cabecalho">
      <Navbar light expand="md" >
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/timeline">Timeline</NavLink>
            </NavItem> &nbsp; &nbsp; &nbsp;

            <NavItem>
              <NavLink href="/Descarte">Descarte</NavLink>
            </NavItem>&nbsp; &nbsp; &nbsp;

            <NavItem>
              <NavLink href="/ranking">Ranking</NavLink>
            </NavItem>&nbsp; &nbsp; &nbsp;

            <NavItem>
              <NavLink href="/perfil">Perfil</NavLink>
            </NavItem>&nbsp; &nbsp; &nbsp;

            <NavItem>
              <NavLink className="pointer" onClick={sair}>Sair</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}



export default Menu;