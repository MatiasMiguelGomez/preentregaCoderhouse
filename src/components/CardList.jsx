import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CardList = ({ producto, descripcion, path }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{producto}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <NavLink to={`/item/${path}`}>
          <Button variant='primary'>Detalles de {producto}</Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};
