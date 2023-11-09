import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';


@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {
addItem($event: MouseEvent) {
throw new Error('Method not implemented.');
}

  @Input() empleadoDeLista: Empleado;

  @Input() indice: number;
  
  empleado: any;

  constructor() { }

  ngOnInit(): void {
  }

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }

}
