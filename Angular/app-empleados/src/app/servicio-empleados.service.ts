import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  muestraMesaje(mensaje: string) {
    alert (mensaje);
  }

}
