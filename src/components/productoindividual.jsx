import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductoIndividual = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/v1/products/${id}`)
      .then(response => {
        setProducto(response.data.producto);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);  

  if (!producto) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{producto.name}</h1>
      <p>{producto.description}</p>
      <p>{producto.price}</p>
      {/* Aquí puedes agregar un botón para ir al checkout */}
    </div>
  );
}

export default ProductoIndividual;

