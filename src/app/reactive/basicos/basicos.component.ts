import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miForm: FormGroup = new FormGroup({
  //   nombre      : new FormControl('RTX 4080ti'),
  //   precio      : new FormControl(1500),
  //   existencias : new FormControl(5),
  // })

  validateInputTypeNumber: Validators[] = [Validators.required, Validators.min(0)];

  miForm: FormGroup = this.fb.group({
    nombre: [ 'MacBook Pro M1', [Validators.required, Validators.minLength(3)] ],
    precio: [ 5500, this.validateInputTypeNumber ],
    existencias: [ 3, this.validateInputTypeNumber ],
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  isInputValid( input: string ) {
    return this.miForm.controls[ input ].errors &&
           this.miForm.controls[ input ].touched
  }

  submiForm(): void {
    console.log('Form => ', this.miForm.value);
  }

}
