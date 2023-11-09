import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent implements OnInit {

  nombre = "Guillermo";
  apellido = "Nicoud";
  edad = 31;

  llamaEmpresa(value: String) {
    
  }

  habilitacionCuadro = false;
  usuRegistrado = true;

  getRegistroUsuario() {
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado() {
    alert('El usuario se ha acabad de registrar');
  }
  
  // empresa = "Mundol";

  // getEdad() {
  //   return this.edad;
  // }
  
  constructor() { }

  ngOnInit(): void {
  }

}
