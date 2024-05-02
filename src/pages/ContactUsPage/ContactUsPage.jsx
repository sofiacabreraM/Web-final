import React from 'react';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <div>
      <h1>Esta es la página de contacto</h1>
      <Link to="/sobre-nosotros">Haz clic para ver la página sobre nosotros</Link>
      <Link to="/">Haz clic para ver la página de inicio</Link>
    </div>
  );
}

export default ContactUs;