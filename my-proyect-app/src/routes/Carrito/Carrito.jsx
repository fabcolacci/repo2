import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import '../Carrito/Carrito.css';

const CarritoDeCompras = () => {
  const [itemsCarrito, setItemsCarrito] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate(); // Hook para la navegación

  const fetchItemsCarrito = async () => {
    const response = await fetch('http://localhost:3001/carrito');
    const data = await response.json();
    setItemsCarrito(data.items);
  };

  const handleCheckout = () => {
    navigate('/metodo-pago'); // Redirige a la página de método de pago
  };

  useEffect(() => {
    fetchItemsCarrito();
  }, []);

  return (
    <div className="carrito-detalle-container">
      <h2>Carrito de Compras</h2>
      <table className="carrito-detalle-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {itemsCarrito.map((item) => (
            <tr key={item.id}>
              <td>{item.titulo}</td>
              <td>${item.precio}</td>
              <td>{item.cantidad}</td>
              <td>${item.precio * item.cantidad}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div id="total">
        <span>Total: ${subtotal}</span>
      </div>

      <button className="comprar-btn" onClick={handleCheckout}>
        Comprar
      </button>
      <button className="seguir-comprando-btn" onClick={() => window.location.href = '/'}>
        Seguir Comprando
      </button>
    </div>
  );
};

export default CarritoDeCompras;
