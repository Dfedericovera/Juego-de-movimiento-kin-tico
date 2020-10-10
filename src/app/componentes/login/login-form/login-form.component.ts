import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from "../../../servicios/authentication.service";
import { JugadoresService } from "../../../servicios/jugadores.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  listadoUsuarios:Array<any>;

  constructor(
    private authService:AuthenticationService,
    private jugadoresService:JugadoresService,
    private router:Router
  ) { }

  ngOnInit() {
    this.jugadoresService.getUsuarios().subscribe(data=>{
      this.listadoUsuarios = data;
      console.log(this.listadoUsuarios);
    })
  }

  asignarUsuario(select,f:NgForm){
    console.log("Llego: ",select.detail);
    let user;
    let clave;
    if(select.detail.value == "admin@admin.com"){
      console.log("admin");
      user= select.detail.value;
      clave= 111111;
    }
    else if(select.detail.value == "anonimo@anonimo.com"){
      console.log("admin");
      user= select.detail.value;
      clave= 444444;
    }
    else if(select.detail.value == "invitado@invitado.com"){
      console.log("admin");
      user= select.detail.value;
      clave= 222222;
    }
    else if(select.detail.value == "tester@tester.com"){
      console.log("admin");
      user= select.detail.value;
      clave= 555555;
    }
    else if(select.detail.value == "usuario@usuario.com"){
      console.log("admin");
      user= select.detail.value;
      clave= 333333;
    }

    f.control.patchValue({
      usuario: user,
      clave: clave
    })
    /* f.control.value.usuario=select.detail.value; */
    /* console.log(f.control.value); */

  }
  login(f:NgForm){
    
    this.authService.SignIn(f.value.usuario,f.value.clave.toString()).then(data=>{
      this.authService.userData = data.user;
      console.log("OK ingresando..", data);
      this.router.navigate(['/home']);
    }).catch(error=>{
      console.log("ERROR: ", error.message);
    })
  }

}
