import React, { useState } from 'react';
import { Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
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
              <NavItem /* Menu Ranking */> 
                <NavLink href="/ranking">Ranking</NavLink>
              </NavItem> &nbsp; &nbsp; &nbsp;
  
              <NavItem /* Menu GitHub */>
                <NavLink href="https://github.com/geancarlofd/Gomi">GitHub</NavLink> 
              </NavItem>
            </Nav> &nbsp; &nbsp; &nbsp;
  
            <NavbarText /* Menu Texto */>Simple Text</NavbarText> &nbsp; &nbsp; &nbsp;

            <Nav navbar /* Menu Opções */>
              <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            

          </Collapse>
        </Navbar>
      </div>
    );
  }



  export default Menu;