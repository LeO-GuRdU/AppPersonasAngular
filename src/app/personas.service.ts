import { EventEmitter, Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { LogginService } from "./logginService.service";
import { persona } from "./persona.model";

@Injectable()

export class PersonasService {
    personas : persona[] = [];

    saludar = new EventEmitter<number>();

    constructor (
        private logginService : LogginService,
        private dataService : DataServices
        ){}

    setPersonas(personas : persona[]){
        this.personas = personas;
    }

    obtenerPersonas(){
        return this.dataService.cargarPersonas();
        }

    agregarPersona(persona : persona){
        this.logginService.enviaMensajeAConsola('Enviamos persona: ' + persona.nombre + ' ' + persona.apellido);
        if(this.personas == null){
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersona(this.personas);
    }

    encontrarPersona(index : number){
        let persona : persona = this.personas[index];
        return persona;
    }

    modificarPersona(index : number, persona : persona){
        let persona1 = this.personas[index];
        persona1.nombre = persona.nombre;
        persona1.apellido = persona.apellido;
        this.dataService.modificarPersona(index, persona);
    }

    eliminarPersona(index : number){
        this.personas.splice(index,1);
        this.dataService.eliminarPersona(index);
        //Se tiene que volver a cargar el arreglo en la base de datos para reiniciar los indices.
        this.modificarPersonas();
    }

    modificarPersonas(){
        if(this.personas != null){
            this.dataService.guardarPersona(this.personas);
        }
    }
}