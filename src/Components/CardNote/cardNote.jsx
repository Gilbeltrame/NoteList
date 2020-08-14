import React, { Component } from 'react';
import './style.css';
import Delete from '../../Assets/delete.svg';

class CardNote extends Component {
    render() {
        return (
        <section className="card-note">
            <header className="card-note-header">
                <h3 className="card-note-title">{this.props.title}</h3>
                <img src={Delete} />
            </header>
            <p className="card-note-text">{this.props.text}</p>
        </section>
        );
    }
}

export default CardNote;