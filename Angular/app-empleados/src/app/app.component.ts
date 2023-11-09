import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de Empleados';

  constructor(private miServicio:ServicioEmpleadosService) {} 

  empleados:Empleado[]=[

    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Ana","Diaz","Directora",7500),
    new Empleado("María","Lopez","Jefa Sección",3500),
    new Empleado("Laura","Diaz","Administrativa",2500),

  ];

  agregarEmpleado(){
    let miEmpleado = new Empleado (this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMesaje("Nombre del Empleado: " + miEmpleado.nombre);
    this.empleados.push(miEmpleado);

  }

  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario :number = 0;
}
