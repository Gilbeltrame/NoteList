import React, {Component} from 'react';
import ListaDeNotas from './Components/NoteList'
import Formulario from './Components/Form'
import ListaDeCategorias from './Components/CategList'
import './Assets/App.css'
import './Assets/index.css';
import Categorias from './Data/categorias';
import ArrayNoteList from './Data/notes';

export default class App extends Component {
  
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notes = new ArrayNoteList();
  }

 /*    this.state= {
      //notes: [],
      //categorias:["Música","Filmes"]
    }


  showNote(title,text,categoria) {
    const newNote = {title,text,categoria}
    const newArrayNotes = [...this.state.notes,newNote]
    const newState = {
      notes:newArrayNotes
    }

    this.setState(newState)
  } */

/*   deleteNote(index){
    let noteArray = this.state.notes;
    noteArray.splice(index,1);
    this.setState({notas: noteArray}); 
  } */

 /*  deleteCategoria(index){
    let ArrayCategorias = this.state.categorias;
    ArrayCategorias.splice(index,1)
    this.setState({categorias: ArrayCategorias})
  } */

  /* adicionarCategoria (valorCategoria){
    const ArrayCategorias = [...this.state.categorias, valorCategoria];
    const newState = {...this.state, categorias: ArrayCategorias}
    this.setState(newState);
  } */
  
  render() {
    return (
      <section className="conteudo">
        <Formulario 
        showNote={this.notes.showNote.bind(this.notes)}
        categorias={this.categorias}
        />
        
        <main className="conteudo-principal">

          <ListaDeCategorias 
          categorias={this.categorias}
          adicionarCategoria = {this.categorias.adicionarCategoria.bind(this.categorias)}
          /* deleteCategoria = {this.deleteCategoria.bind(this)} */
          />

          <ListaDeNotas 
          notes={this.notes} 
          deleteNote={this.notes.deleteNote.bind(this.notes)}
          categorias={this.categorias}
          />
        </main>

      </section>
    )
  }
}
