import { Card, Button } from 'react-bootstrap';

const ProductCard = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          {producto.descripcion}
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{producto.precio}</small>
      </Card.Footer>
    </Card>
  );
};

export default ProductCard;

