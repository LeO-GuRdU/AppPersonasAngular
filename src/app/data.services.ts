import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { persona } from './persona.model';


@Injectable()
export class DataServices {
    constructor(private httpClient : HttpClient, private loginService : LoginService){
    }

    cargarPersonas(){
        const token = this.loginService.getIdToken();
         return this.httpClient.get('https://listado-personas-fdf2b-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    guardarPersona (persona : persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-fdf2b-default-rtdb.firebaseio.com/datos.json?auth=' + token,persona)
            .subscribe(
                response => console.log('Resultado de guardar las personas ' + response),
                error => console.log('Error al guardar persona ' + error)
            );
    }

    modificarPersona(index : number, persona : persona){
        const token = this.loginService.getIdToken();
        let url : string;
        url = 'https://listado-personas-fdf2b-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.put(url, persona).
        subscribe(
            response => console.log('Resltado de modificar persona ' + response),
            error => console.log('Error al modificar persona ' + error)
            );
    }

    eliminarPersona(index : number){
        const token = this.loginService.getIdToken();
        let url : string;
        url = 'https://listado-personas-fdf2b-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.delete(url).
        subscribe(
            response => console.log('Resltado de eliminar persona ' + response),
            error => console.log('Error al eliminar persona ' + error)
            );
    }
}