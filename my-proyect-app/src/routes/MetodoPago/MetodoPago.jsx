import React, { useState } from "react";
import "../MetodoPago/MetodoPago.css";

const PaymentPage = () => {
  const [showShipping, setShowShipping] = useState(false);

  const processPayment = () => {
    alert("¡Pago Exitoso!");
    setShowShipping(true);
  };

  return (
    <div className="payment-container">
      {!showShipping ? (
        <div id="payment-section">
          <h2>Método de Pago</h2>
          <form id="payment-form">
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="card-number">Número de Tarjeta</label>
              <input type="text" id="card-number" name="card-number" maxLength="16" required />
            </div>
            <div className="form-group">
              <label htmlFor="expiry-date">Fecha de Expiración</label>
              <input type="month" id="expiry-date" name="expiry-date" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" maxLength="3" required />
            </div>
            <div className="form-group">
              <label htmlFor="payment-type">Tipo de Pago</label>
              <select id="payment-type" name="payment-type" required>
                <option value="contado">Pago al Contado</option>
                <option value="cuotas">Pagar en Cuotas</option>
              </select>
            </div>
            <div className="form-group cuotas-group">
              <label htmlFor="cuotas">Seleccionar Número de Cuotas</label>
              <select id="cuotas" name="cuotas">
                <option value="3">3 Cuotas</option>
                <option value="6">6 Cuotas</option>
                <option value="12">12 Cuotas</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="coupon">Cupón de Descuento</label>
              <input type="text" id="coupon" name="coupon" placeholder="Ingresa tu cupón" />
            </div>
            <button type="button" className="pay-button" onClick={processPayment}>
              Realizar Pago
            </button>
          </form>
        </div>
      ) : (
        <div className="shipping-container" id="shipping-section">
          <h2>Datos de Envío</h2>
          <form id="shipping-form">
            <div className="form-group">
              <label htmlFor="address">Dirección de Envío</label>
              <input type="text" id="address" name="address" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">Ciudad</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="postal-code">Código Postal</label>
              <input type="text" id="postal-code" name="postal-code" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input type="text" id="phone" name="phone" required />
            </div>
            <button type="submit" className="pay-button">
              Confirmar Envío
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
