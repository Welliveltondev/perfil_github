import { useState } from "react";

import Perfil from "./components/Perfil/index";
import Formulario from  "./components/Formulario";
import ReposList from "./components/ReposList/idenx";


function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('');
  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

    {nomeUsuario.length > 4 && (
      <>
        <Perfil nomeUsuario={nomeUsuario} /> 
        <ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}
    {/* {formularioEstaVisivel && (
      <Formulario/> */}
    {/* )} */}
    {/* <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button"></button> */}
    </>
  )

}

export default App
