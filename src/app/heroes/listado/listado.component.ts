import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  public heroes: string[] = [
    'Spiderman',
    'Scarlet Witch',
    'Hulk',
    'Thor',
    'Capitana Marvel'
  ];

  public heroeBorrado: string = '';

  public borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
