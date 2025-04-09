// src/components/FormularioContactoComponent.jsx
import React, { useState } from 'react';
import styles from '../css/formularioContacto.module.css'; // CSS Modules para estilos encapsulados

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const [estado, setEstado] = useState({
    enviado: false,
    error: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setEstado({ error: true, enviado: false });
      return;
    }

    // Simulación de envío
    setTimeout(() => {
      setEstado({ enviado: true, error: false });
      setFormData({ nombre: '', email: '', mensaje: '' });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.formContainer}>
      {estado.enviado && (
        <div className={styles.successMessage}>
          ¡Mensaje enviado con éxito! 🎉
        </div>
      )}

      {estado.error && (
        <div className={styles.errorMessage}>
          Por favor completa todos los campos.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Mensaje:</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Enviar mensaje
        </button>
      </form>
    </div>
  );
};

export default FormularioContacto;