import { Component , OnInit} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MiUsuario } from '../../clases/usuario';


@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent implements OnInit{
  usuario !:MiUsuario;

  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    const strUser = localStorage.getItem("Usuario") ?? "";
    
    this.usuario = JSON.parse(strUser);
  }

  

}
