import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from '../persona.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas : persona[] = [];
  indice : number;

  constructor(private personaService : PersonasService, private router:Router){ }

  ngOnInit(): void {
    this.personaService.obtenerPersonas()
    .subscribe(
      (persona : any) => {
        this.personas = persona,
        this.personaService.setPersonas(persona);
      }
    );
  }

  agregar(){
    this.router.navigate(['personas/agregar']);
  }
}
