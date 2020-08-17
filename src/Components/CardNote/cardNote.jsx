import React, { Component } from 'react';
import './style.css';
import Delete from '../../Assets/delete.svg';

class CardNote extends Component {

    deleteNote(){
        const index = this.props.index
        this.props.deleteNote(index)
    }
    render() {
        return (
        <section className="card-note">
            <header className="card-note-header">
                <h3 className="card-note-title">{this.props.title}</h3>
                <img src={Delete} onClick={this.deleteNote.bind(this)}/>
            </header>
            <p className="card-note-text">{this.props.text}</p>
        </section>
        );
    }
}

export default CardNote;