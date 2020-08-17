

export default class ArrayNoteList {
    constructor(){
        this.notes = [];
        this._inscritos = [];
    }

    inscrever(funcao) {
        this._inscritos.push(funcao);
    }

    desinscrever(funcao){
        this._inscritos = this._inscritos.filter( p => p !== funcao)
    }

    notificar(){
        this._inscritos.forEach(funcao => {
            funcao(this.notes);
        })
    }

    showNote(title, text, categoria){
        const newNote = new Note(title, text, categoria);
        this.notes.push(newNote)
        this.notificar();
    }

    deleteNote(index){
        this.notes.splice(index,1)
        this.notificar();
    }
}

class Note{
    constructor(title, text, categoria) {
        this.title = title;
        this.text = text;
        this.categoria = categoria;
    }
}