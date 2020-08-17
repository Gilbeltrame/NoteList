import React, {Component} from 'react';
import ListaDeNotas from './Components/NoteList'
import Formulario from './Components/Form'
import ListaDeCategorias from './Components/CategList'
import './Assets/App.css'
import './Assets/index.css';

export default class App extends Component {
  
  constructor(){
    super();
    this.state= {
      notes: [],
      categorias:[]
    }
  }

  showNote(title,text) {
    const newNote = {title,text}
    const newArrayNotes = [...this.state.notes,newNote]
    const newState = {
      notes:newArrayNotes
    }

    this.setState(newState)
  }
  deleteNote(index){
    let noteArray = this.state.notes;
    noteArray.splice(index,1);
    this.setState({notas: noteArray}); 
  }

 /*  deleteCategoria(index){
    let ArrayCategorias = this.state.categorias;
    ArrayCategorias.splice(index,1)
    this.setState({categorias: ArrayCategorias})
  } */

  adicionarCategoria (valorCategoria){
    const ArrayCategorias = [...this.state.categorias, valorCategoria];
    const newState = {...this.state, categorias: ArrayCategorias}
    this.setState(newState);
  }
  
  render() {
    return (
      <section className="conteudo">
        <Formulario 
        showNote={this.showNote.bind(this)}
        categorias={this.state.categorias}
        />
        
        <main className="conteudo-principal">

          <ListaDeCategorias 
          categorias={this.state.categorias}
          adicionarCategoria = {this.adicionarCategoria.bind(this)}
          /* deleteCategoria = {this.deleteCategoria.bind(this)} */
          />

          <ListaDeNotas 
          notes={this.state.notes} 
          deleteNote={this.deleteNote.bind(this)}
          />
        </main>

      </section>
    )
  }
}
