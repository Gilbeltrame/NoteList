import React, { Component } from 'react';
import './style.css'

export default class ListaDeCategorias extends Component {

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
                    {this.props.categorias.map((categoria, index) =>
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