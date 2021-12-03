import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input()
  public nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  constructor(private dbService: DbzService,) {}

  public agregar(): void{
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }
    this.dbService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }

}
