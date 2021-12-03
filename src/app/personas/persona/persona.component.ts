import { Component, Input, OnInit } from '@angular/core';
import { LogginService } from '../../logginService.service';
import { persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  
  @Input() persona : persona;
  @Input() indice : number; 
  constructor(private logginService : LogginService, private personasService : PersonasService) { }

  ngOnInit(): void {
  }

  emitirSaludo (){
    this.personasService.saludar.emit(this.indice);
  }

}
