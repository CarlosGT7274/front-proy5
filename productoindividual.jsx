import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductoIndividual(props) {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProducto() {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/products/${id}`);
        const data = await response.json();
        setProducto(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducto();
  }, [id]);

  if (!producto) {
    return <div>Cargando producto...</div>;
  }

  return (
    <div>
      <h3>{producto.product.name}</h3>
      <p>{producto.product.description}</p>
      <p>Precio: ${producto.product.price} mxn</p>
      <p>{producto.product.image}</p>
      <img src={producto.product.image} alt={producto.product.name} />
    </div>
  );
}

export default ProductoIndividual;

