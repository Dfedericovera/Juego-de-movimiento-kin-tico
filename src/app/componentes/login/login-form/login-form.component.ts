import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  asignarUsuario(select,f:NgForm){
    console.log("Llego: " , select.detail.value,f.value);
    f.control.patchValue({
      usuario: select.detail.value+"@"+select.detail.value+".com",
      contraseña: '1234'
    })
    /* f.control.value.usuario=select.detail.value; */
    /* console.log(f.control.value); */

  }

}
