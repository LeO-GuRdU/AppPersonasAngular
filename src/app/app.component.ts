import { Component, OnInit } from '@angular/core';
import { persona } from './persona.model';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas : persona[] = [];
  indice : number;

  constructor(private LoginService : LoginService){ }

  ngOnInit() : void{
  }

  isAutenticado(){
    return this.LoginService.isAutenticado();
  }

  salir(){
    this.LoginService.logout();
  }
}
