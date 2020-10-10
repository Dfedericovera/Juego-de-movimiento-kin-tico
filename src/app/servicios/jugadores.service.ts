import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { map } from 'rxjs/operators';
import { user } from "../interface/user";
@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  listado:Array<any>=[];
  constructor(private db:AngularFirestore) { }
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
  getUsuarios(){
    return this.db.collection('usuarios').snapshotChanges().pipe(map(users =>{
      return users.map(a => {        
        const data = a.payload.doc.data() as user;
        return data;
      })
    }))
  }


  modificarUsuario(emailUsuario, mejorTiempo){
    return this.db.collection("usuarios").doc(emailUsuario).update({
      mejorTiempo: mejorTiempo
    }).then(function () {
        console.log("Document successfully updated!");
      }).catch(function (error) {
        console.error("Error updating document: ", error);
      });
  }

  
}
