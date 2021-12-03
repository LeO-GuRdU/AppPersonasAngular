import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from '../../persona.model';
import { PersonasService } from '../../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  nombreInput : string = '';
  apellidoInput : string = '';
  index : number;
  modoEdicion : number;

  constructor(private router : Router,
              private personaService : PersonasService,
              private route : ActivatedRoute
              ){
    personaService.saludar.subscribe((indice : Number) => (alert('El indice es: ' + indice)));
  }

  ngOnInit(){
    this.index = this.route.snapshot.params['id'];
    this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];
    if(this.modoEdicion != null && this.modoEdicion === 1){
      let persona : persona = this.personaService.encontrarPersona(this.index);
      this.nombreInput = persona.nombre;
      this.apellidoInput = persona.apellido;
    }
  }

  onGuardarPersona(){
    let persona1 = new persona(this.nombreInput,this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personaService.modificarPersona(this.index,persona1);
    }else{
      this.personaService.agregarPersona(persona1);
    }
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index){
      this.personaService.eliminarPersona(this.index);
    }
    this.router.navigate(['/personas']);
  }
}
