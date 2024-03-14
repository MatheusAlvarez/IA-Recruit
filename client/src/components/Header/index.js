import React from "react";
import './styles.css'
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

import logoIA from "../../assets/logoIA.png"

const Header = () => {
    return(
         <div className="header">
            <div className="header_logo">                
                <img className="logoIA" src={logoIA} alt="Logo IA"/>
            </div>
            <div className="header_center"></div>
            
            <div className="header_right">
              <Link to="/login" target="_blank">
                <p className="ghostItem">Login</p>
              </Link>
            </div>
            
            <div className="revealGhostItems">
                <Navbar className="cont" expand={false}>
                  <Container fluid >
                    <Navbar.Toggle href="#" className="menu"><p>Menu</p></Navbar.Toggle>
                    <Navbar.Offcanvas
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                      placement="end"
                    >
                      <Offcanvas.Header closeButton className="back-color-menu">
                        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body className="back-color-menu">
                        <Nav className="justify-content-end flex-grow-1 pe-3 back-color-menu">
                          <Link className="text-decoration-none" to="/login" target="_blank">                            
                           <Nav.Item className="listItem">Login</Nav.Item>
                          </Link>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar> 
            </div>
        </div> 
    );
}
                 
export default Header;