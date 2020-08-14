import React, { Component } from 'react';
import './style.css'

class Formulario extends Component {
    
    constructor(props){
        super(props)
        this.title=""
        this.text="" //
    }
    _handleChangeTitle(e){
        e.stopPropagation();
        this.title = e.target.value
    }

    _handleChangeText(e){
        e.stopPropagation();
        this.text = e.target.value
    }

    _createNote(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.showNote(this.title, this.text);
        }

    render() {
        return (
        <form className="form-cadastro"
                onSubmit={this._createNote.bind(this)}>
            <input 
            className="form-cadastro_input" 
            placeholder="título"
            onChange= {this._handleChangeTitle.bind(this)}
            />

            <textarea 
            className="form-cadastro_input" 
            placeholder="escreva aqui"
            rows={10}
            onChange={this._handleChangeText.bind(this)}
            />

            <button className="form-cadastro_submit">
                Criar Nota
            </button>

        </form>
        );
    }
}

export default Formulario;