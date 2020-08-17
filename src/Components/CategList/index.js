import React, { Component } from 'react';
import './style.css'

export default class ListaDeCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias:[]};

        this._novasCategorias = this._novasCategorias.bind(this);
    }
           
    
    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.inscrever(this._novasCategorias)
    }

    _novasCategorias(categorias){
        this.setState({...this.state, categorias})
    }

    handleEventoInput(e){
            if(e.key == 'Enter' &&  e.target.value != ''){
            let valorCategoria = e.target.value
            this.props.adicionarCategoria(valorCategoria)
        }
    }

    /* deleteCategoria(){
        const index = this.props.index
        this.props.deleteCategoria(index)
    } */

    render() {
       return (
           <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) =>
                        <li className="lista-categorias_item" key={index} /* onClick={this.deleteCategoria.bind(this)} */>
                            {categoria}
                        </li>
                    )}
                </ul>
                <input 
                type="text" 
                className="lista-categorias_input" 
                placeholder="adicionar categoria"
                onKeyUp={this.handleEventoInput.bind(this)}/>
           </section>
           )
    }
}