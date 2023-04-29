import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext.jsx';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Head from "./header.jsx";
import axios from 'axios';

const Profile = () => {
  const { userData, setUserData } = useContext(UserContext);
  const navigation = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const url = 'http://localhost:4000/api/v1/users/me';
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get(url, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setUserData(response.data);
        } catch (error) {
          localStorage.removeItem('token');
          navigation('/login');
        }
      } else {
        navigation('/login');
      }
    };
    checkToken();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUserData({});
    navigation('/login');
  };

  return (
    <>
      <Head />
      <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Profile</h1>
          <p>Welcome {userData.username}</p>
          <p>Email: {userData.email}</p>
          <Button variant="primary" onClick={handleLogout}>Logout</Button>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Profile;

