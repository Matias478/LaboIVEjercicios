import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MiUsuario } from '../../clases/usuario';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { ErrorComponent } from '../error/error.component';
import { Router, RouterModule, } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, BienvenidoComponent,ErrorComponent, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:MiUsuario= new MiUsuario("","");
  usuarioCorrecto:MiUsuario=new MiUsuario("Matias","123");
  //usuarioRegistrado!:MiUsuario;
  exito!:boolean;

  guardarUser(){
    const userStr = JSON.stringify(this.usuario);
    localStorage.setItem("Usuario", userStr);
  }

  login():void{
    if(this.usuario.nombre===this.usuarioCorrecto.nombre && this.usuario.clave===this.usuarioCorrecto.clave){
      this.exito=true;
      this.goTo("bienvenido");
      this.guardarUser();
    }else if(this.usuario.nombre!=this.usuarioCorrecto.nombre && this.usuario.clave===this.usuarioCorrecto.clave){
      this.exito=false;
      this.goTo("error");
    }else if (this.usuario.nombre===this.usuarioCorrecto.nombre && this.usuario.clave!=this.usuarioCorrecto.clave) {
      this.exito=false;
      this.goTo("error");
    }else if(this.usuario.nombre!=this.usuarioCorrecto.nombre && this.usuario.clave!=this.usuarioCorrecto.clave){
      this.exito=false;
      this.goTo("error");
    }
  }
  // registrarse():void{
  //  this.usuarioRegistrado = new MiUsuario(this.usuario.nombre,this.usuario.clave);
  // }
  
  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
