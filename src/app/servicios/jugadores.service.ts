import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  listado:Array<any>=[];
  constructor() { }
  traerTodos(filtro){
    this.listado=[];
    var admin ={
      correo:"admin@admin.com",
      perfil:"admin",
      sexo:"femenino",
      tiempo:this.msToTime(956456456),
    } 
    this.listado.push(admin);
    var invitado ={
      correo:"invitado@invitado.com",
      perfil:"invitado",
      sexo:"femenino",
      tiempo:this.msToTime(85615313),
    } 
    this.listado.push(invitado);
    var usuario ={
      correo:"usuario@usuario.com",
      perfil:"usuario",
      sexo:"femenino",
      tiempo:this.msToTime(705313),
    } 
    this.listado.push(usuario);
    
    return this.listado;
  }
  msToTime(s) {
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    /* var mins = s % 60; */
  
    return secs + '.' + ms;
  }
}
