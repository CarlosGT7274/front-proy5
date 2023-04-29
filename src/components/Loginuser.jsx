import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import Head from "./header.jsx";
import { Card, Form, Button, Container } from 'react-bootstrap';
import "./css/register.css";

const Loginuser = () => {
  const [loginUser, setLoginUser] = useState()
  const { userData, setUserData } = useContext(UserContext)

  const url = 'http://localhost:4000/api/v1/auth/login'
  const url2 = 'http://localhost:4000/api/v1/users/me'
  const navigation = useNavigate()

  const handleSubmit = async () => {
    console.log(loginUser)
    axios.post(url, loginUser)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        console.log(res.data)
        return (
          axios.get(url2, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${res.data.token}`
            }
          }).then(response => {
            console.log(response.data)
            setUserData(response.data)
            localStorage.setItem('token', res.data.token)
            navigation('/profile')
          })
        )
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginUser({
      ...loginUser,
      [name]: value
    })
    console.log(loginUser)
  }

  useEffect(() => {
    if (Object.keys(userData).length !== 0) {
      navigation('/profile')
    }
  }, []);

  return (
    <>
      <Head />
    <Container className="d-flex align-items-center justify-content-center fondo yoigual">
    <Card className="p-4">
      <Card.Body>
        <Card.Title>Login</Card.Title>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default Loginuser
