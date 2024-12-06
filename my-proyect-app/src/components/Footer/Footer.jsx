// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <footer>
        <div className="footer-section">
          <div className="footer-column">
            <h3>Acerca de Tienda Utilisimo</h3>
            <div className="footer-links">
              <a href="#">Nosotros</a>
              <a href="#">Nuestras Tiendas</a>
            </div>
          </div>
  
          <div className="footer-column">
            <h3>Libro de Reclamaciones</h3>
            <img src="/imgFooter/LibrodeReclamaciones.jpg" alt="Libro de Reclamaciones" />
          </div>
  
          <div className="footer-column">
            <h3>Servicio al Cliente</h3>
            <div className="footer-links">
              <a href="#">Contáctanos</a>
            </div>
          </div>

        </div>
  
        <div className="footer-bottom">
          <div className="footer-left">
            
            <div className="social-media">
              <img src="/imgFooter/facebook.png" alt="Facebook" />
              <img src="/imgFooter/X.jpg" alt="X" />
              <img src="/imgFooter/instagram.png" alt="Instagram" />
            </div>
          </div>
  
          <div className="footer-right">
            <h3>Medios de Pago</h3>
            <div className="payment-methods">
              <img src="/imgFooter/visa.png" alt="Visa" />
              <img src="/imgFooter/mastercard.png" alt="Mastercard" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;