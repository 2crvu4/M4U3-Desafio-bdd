import { useState } from "react";                                           // 1:28:52 
import { BaseColaboradores } from "./Datos/BaseColaboradores.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import Formulario from "./Componentes/Formulario.jsx";
import ListaColaboradores from "./Componentes/ListaColaboradores.jsx";
import Header from "./Componentes/Header.jsx";

function App() {
  const [lstColaboradores, setLstColaboradores] = useState(BaseColaboradores);
  const [lstFiltrada, setLstFiltrada] = useState(BaseColaboradores);
  const [valorDeLaCaja, SetvalorDeLaCaja] = useState(BaseColaboradores);


  return (
    <div className="App">
 
      <Header
        lstColaboradores={lstColaboradores}
        setLstFiltrada={setLstFiltrada}>
      </Header>

      <Formulario
        lstColaboradores={lstColaboradores}
        setLstColaboradores={setLstColaboradores}
        setLstFiltrada={setLstFiltrada}> 
      </Formulario>

      <ListaColaboradores
        lstColaboradores={lstFiltrada}>
      </ListaColaboradores>

    </div>
  );
}

export default App;
