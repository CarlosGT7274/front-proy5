import React, { useState, useContext } from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import logo from './layouts/imagenes/logito.png';

function Head(){
  const navigation = useNavigate()
  const { theme, toggleTheme, logout } = useContext(ThemeContext)
  const { userData } = useContext(UserContext)

  return (
    <Navbar bg={theme} variant={theme } id="navbar-n" >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="" className="log"></img>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link> 
            <Nav.Link href="/listadeproductos">Productos</Nav.Link>
            <Nav.Link href="/checkout">Checkout</Nav.Link>
            <Nav.Link href="/register">Registrarse</Nav.Link>
            <Nav.Link href="/login">Iniciar sesion</Nav.Link>
            <Nav.Link href="/profile">Perfil de usuario</Nav.Link>
          </Nav>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              onChange={() => toggleTheme()}
            />
          </Form>
        </Container>
      </Navbar>
  )
}

export default Head;
