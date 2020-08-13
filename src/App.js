import React from 'react';
import ListaDeNotas from './Components/noteList.jsx'


function App() {
  return (
    <div>
      <form>
        <input placeholder="título"/>
        <textarea placeholder="escreva aqui"/>
        <button>Criar Nota</button>
      </form>
      <ListaDeNotas/>
    </div>
  )
}

export default App;
