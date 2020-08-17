import React, { Component } from 'react';
import './style.css'

class Formulario extends Component {
    
    constructor(props){
        super(props)
        this.title=""
        this.text=""
        this.categoria = ""

        this.state = {categorias: []}
        this._novasCategorias = this._novasCategorias.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias)
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategorias)
    }

    _novasCategorias(categorias) {
        this.setState({...this.state, categorias})
    }

    _handleChangeTitle(e){
        e.stopPropagation();
        this.title = e.target.value
    }

    _handleChangeText(e){
        e.stopPropagation();
        this.text = e.target.value
    }

    _handleChangeCategoria(e){
        e.stopPropagation();
        this.categoria = e.target.value;
    }

    _createNote(e){
        e.preventDefault();
        e.stopPropagation();
        this.props.showNote(this.title, this.text, this.categoria);
        }

    render() {
        return (
        <form className="form-cadastro"
                onSubmit={this._createNote.bind(this)}>
            
            <select 
            onChange={this._handleChangeCategoria.bind(this)}
            className="form-cadastro_input"
            placeholder="Categorias">

                <option defaultChecked={true}>
                    Selecione a Categoria
                </option>

                {this.state.categorias.map((categoria, index)=>{
                    return (
                    <option key={index}>
                        {categoria}
                    </option>)
                })}
            </select>
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