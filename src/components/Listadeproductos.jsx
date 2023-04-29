import React, { useState, useEffect, useRouter, useHistory } from 'react'
//import classes from "../components/Listadeproductos.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductCard from './cardprod.jsx';
import Head from "./header.jsx";
import axios from 'axios';
import "./css/register.css";
import { Link, BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';


const Listadeproductos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/products')
      .then(response => {
        setProductos(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);  


return (
    <>
    <Head />
    <div className="prod">
    {productos.map(producto => (
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.image} />
      <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>{producto.description}</Card.Text>
        <Card.Text>{producto.price}</Card.Text>
        <Button variant="primary" as={Link} to="/prodindividual">Comprar</Button>
      </Card.Body>
    </Card>  
    ))}
  </div>    
    </>
  );
}

export default Listadeproductos
