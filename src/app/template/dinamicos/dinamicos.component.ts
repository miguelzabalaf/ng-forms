import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('formName') formName!: NgForm

  persona: Persona ={
    nombre: 'Miguel',
    favoritos: [
      { id: 1, nombre: 'Valorant' },
      { id: 2, nombre: 'Operation7' },
    ]
  }

  nuevoJuego: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  isInvalidName(): boolean {
    return this.formName?.controls.nombre?.invalid &&
           this.formName?.controls.nombre?.touched ? true : false

  }

  guardar(): void {
    console.log('Form: ', this.formName.value);
  }

  addFavorito(): void {
    if (this.nuevoJuego) {
      this.persona.favoritos.push({
        id: this.persona.favoritos.length + 1,
        nombre: this.nuevoJuego
      })
      this.nuevoJuego = '';
    }
  }

  deleteFavorito(favorito: Favorito): void {
    const favIndex = this.persona.favoritos.indexOf( favorito );
    this.persona.favoritos.splice( favIndex, 1 );
  }

}
