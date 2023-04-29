import React, { useState } from 'react'
import axios from 'axios'
import "./css/register.css";
import { Container, Card, Form, Button } from 'react-bootstrap';
import  Head  from "./header.jsx";


const FormUser = () => {
     const [userData,setData] = useState()

     const saveUser = async() =>{
      const url = 'http://localhost:4000/api/v1/register'
      const result = await axios.post(url, userData)
      console.log(result)
     }
    
     const handleChange = (e) =>{
      const {name, value} = e.target
      setData({
        ...userData,
        [name]: value
      })
      console.log(setData)
     }


return (
    <>
   <Head /> 
    <Container className="d-flex align-items-center justify-content-center fondo yoigual">
      <Card className="p-4">
        <h1 className="titulo">Registro</h1>
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" name='username' onChange={handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email"name='email' onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name ='password' onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={()=> saveUser()}>
            Enviar
          </Button>
        </Form>
      </Card>
    </Container>
    </>
  )

}

export default FormUser
