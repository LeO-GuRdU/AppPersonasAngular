import { Component, OnInit } from '@angular/core';
import { persona } from './persona.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  personas : persona[] = [];
  indice : number;

  constructor(){ }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyANbcKHrQkCBG0L3et7MIUPRv-f4sAF7Sg",
      authDomain: "listado-personas-fdf2b.firebaseapp.com"
    })
  }

}
