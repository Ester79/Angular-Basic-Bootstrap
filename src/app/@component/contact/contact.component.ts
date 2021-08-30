import { Component, OnInit} from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  template: `<h1>Contact Component </h1>`
})
export class ContactComponent implements OnInit {

    //Crear variable que contiene el formulario
    signupForm: FormGroup
    vacio: string =  "";


  constructor(private builder: FormBuilder) {
    this.signupForm = this.builder.group({
      nombre: [''], // Inicializa vacío
      usuario: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])] ,
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)] )]
    });
  }

  enviar(values:any){
    console.log(values);
  }

  borrar(){
    this.signupForm.patchValue({
      nombre: '',
      usuario: '',
      email: '',
      password:''
    });

  }



    ngOnInit(): void {
    }

  }







