import React, {Component} from 'react';
import CardNote from '../CardNote/';
import './style.css';

class ListaDeNotas extends Component {

    constructor(){
        super();
        this.state = {notes: []}

        this._novasNotas = this._novasNotas.bind(this);
    }

    componentDidMount(){
        this.props.notes.inscrever(this._novasNotas);
    }

    componentWillUnmount(){
        this.props.notes.desinscrever(this._novasNotas);
    }

    _novasNotas(notes){
        this.setState({...this.state, notes})
    }

    render(){
        return (
            <ul className="note-list">
                {this.state.notes.map((note,index) =>{
                   return (
                    <li className="note-list-item" key={index}>
                       
                        <CardNote 
                        index = {index}
                        deleteNote={this.props.deleteNote}
                        categoria={note.categoria}
                        title={note.title} 
                        text={note.text}/>
                    </li>
                    )
                }
                )}
            </ul>
        );
    }
}

export default ListaDeNotas;