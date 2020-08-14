import React, {Component} from 'react';
import ListaDeNotas from './Components/NoteList'
import Formulario from './Components/Form'
import './Assets/App.css'
import './Assets/index.css';

export default class App extends Component {
  
  constructor(){
    super();
    this.state= {
      notes: []
    }
  }

  showNote(title,text) {
    const newNote = {title,text}
    const newArrayNotes = [...this.state.notes,newNote]
    const newState = {
      notes:newArrayNotes
    }

    this.setState(newState)}

  
  render() {
    return (
      <section className="conteudo">
        <Formulario showNote={this.showNote.bind(this)}/>
        <ListaDeNotas notes={this.state.notes}/>
      </section>
    )
  }
}
