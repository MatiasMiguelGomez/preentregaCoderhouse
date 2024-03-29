import { useEffect, useState } from 'react';
import data from '../data/data.json';
import { useParams } from 'react-router-dom';
import { CardList } from './CardList';

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { id } = useParams();
  const idNumber = Number(id);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => resolve(data), 3000);
    });
    getData.then(data => {
      const productoFiltrado = data.find(producto => producto.id === idNumber);
      setProducto(productoFiltrado);
      console.log(productoFiltrado);
    });
  }, [idNumber]);

  if (!producto) return <h2>cargando</h2>;

  return (
    <>
      <CardList
        producto={producto.producto}
        descripcion={producto.descripcion}
        path={producto.id}
      />
      ;
    </>
  );
};
