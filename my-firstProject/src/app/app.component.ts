import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, BienvenidoComponent, CommonModule, LoginComponent, ErrorComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  exito!: boolean;

  hizoClick(){
    this.exito=true;
  }

  // title: string = 'My First Project';

  // nombre:string="Matias";
  // edadUno!: string;
  // edadDos!: string;
  // promedio!: string;
  // suma!: string;

  // CalcularPromedio(edadUno:string,edadDos:string):string{
  //   return ((Number.parseFloat(edadUno)+Number.parseFloat(edadDos))/2).toString();
  // }

  // CalcularSuma(edadUno:string,edadDos:string):string{
  //   return (Number.parseFloat(edadUno)+Number.parseFloat(edadDos)).toString();
  // }

  // OnClick():void{
  //   this.suma = this.CalcularSuma(this.edadUno,this.edadDos);
  //   this.promedio = this.CalcularPromedio(this.edadUno,this.edadDos);
  // }

  // LimpiarCuadrosTexto():void{
  //   this.edadUno="";
  //   this.edadDos="";
  //   this.promedio="";
  //   this.suma="";
  // }

}
