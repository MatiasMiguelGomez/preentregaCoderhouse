import { useEffect, useState } from 'react';
import data from '../data/data.json';
import { useParams } from 'react-router-dom';
import { CardList } from './CardList';

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => resolve(data), 3000);
    });
    getData.then(data => {
      if (id) {
        const productosFiltrados = data.filter(
          producto => producto.categoria === id
        );
        setProductos(productosFiltrados);
      } else {
        setProductos(data);
      }
    });
  }, [id]);

  if (!productos) return <h2>cargando</h2>;

  return (
    <>
      {productos.map(item => (
        <CardList
          key={item.id}
          producto={item.producto}
          descripcion={item.descripcion}
          path={item.id}
        />
      ))}
    </>
  );
};
