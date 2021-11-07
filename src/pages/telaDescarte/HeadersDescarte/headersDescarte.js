import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
              <NavLink href="/">Perfil</NavLink>
            </NavItem>&nbsp; &nbsp; &nbsp;

            <NavItem>
              <NavLink href="/">Sair</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}



export default Menu;