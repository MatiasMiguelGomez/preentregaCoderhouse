import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary'>
      <Container>
        <Link to='/'>Ecomerce</Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavDropdown title='Categorias' id='basic-nav-dropdown'>
              <Link to='/category/Electrónica' className='dropdown-item'>
                Electrónica
              </Link>
              <Link to='/category/Accesorios' className='dropdown-item'>
                Accesorios
              </Link>
              <Link to='/category/Hogar' className='dropdown-item'>
                Hogar
              </Link>
              <Link to='/category/Juegos' className='dropdown-item'>
                Juegos
              </Link>
              <Link to='/category/Deportes' className='dropdown-item'>
                Deportes
              </Link>
              <Link to='/category/Libros' className='dropdown-item'>
                Libros
              </Link>
              <Link to='/category/Calzado' className='dropdown-item'>
                Calzado
              </Link>
              <Link to='/category/Ropa' className='dropdown-item'>
                Ropa
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
