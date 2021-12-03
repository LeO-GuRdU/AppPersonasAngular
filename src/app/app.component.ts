import { Component, OnInit } from '@angular/core';
import { persona } from './persona.model';
import { initializeApp } from 'firebase/app';

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
    const firebaseConfig = {
      apiKey: "AIzaSyANbcKHrQkCBG0L3et7MIUPRv-f4sAF7Sg",
      authDomain: "listado-personas-fdf2b.firebaseapp.com",
      databaseURL: "https://listado-personas-fdf2b-default-rtdb.firebaseio.com",
      projectId: "listado-personas-fdf2b",
      storageBucket: "listado-personas-fdf2b.appspot.com",
      messagingSenderId: "54055434593",
      appId: "1:54055434593:web:1ea21efa13461232f66d20",
      measurementId: "G-KQS6C61NFS"
    };

    const firebase = initializeApp(firebaseConfig);

  }

}
