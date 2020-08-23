import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({ crearCita }) => {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCita({ ...cita, [e.target.name]: e.target.value });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const handleSubmit = (e) => {
    e.preventDefault();
    //validaciones
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    //Asignar id
    cita.id = uuid();

    //crear cita
    crearCita(cita);

    //reiniciar form
    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label htmlFor="mascota">Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={handleChange}
          value={mascota}
        />
        <label htmlFor="propietario">Nombre dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          onChange={handleChange}
          value={propietario}
        />
        <label htmlFor="fecha">Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label htmlFor="hora">Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label htmlFor="sintomas">Sintomas</label>
        <textarea
          name="sintomas"
          cols="30"
          rows="10"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Reservar turno
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
