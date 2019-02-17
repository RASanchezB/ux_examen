import React, {Component} from 'react';

class CitaForm extends Component{
    constructor(){
        super();
        this.state={
            Nombre: '',
            ID: '',
            Residencia: '',
            Telefono: '',
            Propiedad: '',
            Oficina: ''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInput(e){
        const{value,Nombre}=e.target;
        this.setState({
            [Nombre]:value
        })
    }
    handleSubmit(e){
        alert('Organizando...')
        e.preventDefault();

    }
    
    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            typer="Text"
                            name= "Nombre"
                            onChange = {this.handleInput}
                            className="form-control"
                            placeholder="Su nombre completo"/>
                    </div>
                    <div className="form-group">
                        <input
                            typer="Text"
                            name= "ID"
                            className="form-control"
                            placeholder="Su numero de identidad"/>
                    </div>
                    <div className="form-group">
                        <input
                            typer="Text"
                            name= "Residencia"
                            onChange = {this.handleInput}
                            className="form-control"
                            placeholder="Su lugar de residencia"/>
                    </div>
                    <div className="form-group">
                        <input
                            typer="Text"
                            name= "Telefono"
                            onChange = {this.handleInput}
                            className="form-control"
                            placeholder="Su numero de telefono"/>
                    </div>
                    <div className="form-group">
                        <input
                            typer="Text"
                            name= "Propiedad"
                            onChange = {this.handleInput}
                            className="form-control"
                            placeholder="La propiedad en la que esta interesado"/>
                    </div>
                    <div className="form-group">
                        <select
                            name='Oficina'
                            className="form-control"
                            onChange={this.handleInput}
                        >
                            <option>La Kennedy</option>
                            <option>El Centro</option>
                            <option>Bulevar Morazan</option>
                        </select>
                        <button>
                            Organizar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
export default CitaForm;