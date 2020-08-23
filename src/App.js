import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario.js";
import Cita from "./components/Cita.js";
function App() {
  const [citas, setCitas] = useState([]);

  const crearCita = (cita) => {
    setCitas([...citas, cita]);
  };

  //Funcion que elimina una cita por id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setCitas(nuevasCitas);
  };

  const titulo2 = citas.length === 0 ? "No hay citas" : "Administra tus citas";
  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo2}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
