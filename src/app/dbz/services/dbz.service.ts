import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Gokú',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 10000,
    },
  ];

  get personajes(): Personaje[]{
    return [...this._personajes];
  }

  constructor(){}

  public agregarPersonaje(personaje: Personaje): void {
    this._personajes.push(personaje);
  }

}
