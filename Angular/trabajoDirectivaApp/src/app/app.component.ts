import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje: string = '';
  registrado = false;
  nombre = '';
  apellido = '';
  cargo: string = "";
  entradas: any;

  constructor() {

    this.entradas=[

      {titulo: "Phyton cada dia mas presente"},
      {titulo: "Java presente desde siempre"},
      {titulo: "Javascript cada vez mas funcional"},
      {titulo: "Kotlin potencia apra tus apps"},
      {titulo: "Donde quedó Pascal"},
    ]
  }

  registrarUsuario(){
    this.registrado = true;
    this.mensaje = 'Usuario registrado con éxito ! Felicidades: ';
  }
}
