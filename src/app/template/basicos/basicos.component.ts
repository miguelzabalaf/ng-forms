import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miForm') miForm!: NgForm
  initForm = {
    producto: '',
    precio: 0,
    existencia: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log('Submit: ', this.miForm)
    console.log('Value: ', this.miForm.value)
  }

  productoValido(): boolean {
    return this.miForm?.controls.producto?.touched &&
           this.miForm?.controls.producto?.invalid;
  }

  precioValido(): boolean {
    return this.miForm?.controls.precio?.touched &&
           this.miForm?.controls.precio?.value < 0
  }

  // resetForm(form: NgForm): void {
  resetForm(): void {
    this.miForm.resetForm(this.initForm);
  }

}
