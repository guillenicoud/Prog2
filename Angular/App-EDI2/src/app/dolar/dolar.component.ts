import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {

  valorVenta: any;
  valorCompra: any;
  tipoDolar: any;
  fechaActualizacion: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Llamada a la función para obtener el valor del dólar cuando el componente se inicializa
    this.obtenerValorDolar();
  }

  obtenerValorDolar() {
    const url = 'https://dolarapi.com/v1/dolares/blue'; // Reemplaza con la URL real de la API que proporciona el valor del dólar
      // Realizar la petición HTTP
      this.http.get(url).subscribe(
        (data) => {
          // Manejar la respuesta aquí
          this.valorVenta = data.venta;
          this.valorCompra = data.compra;
          this.tipoDolar = data.nombre;
          this.fechaActualizacion = data.fechaActualizacion;
          console.log('Valor Venta: ', this.valorVenta);
        },
        (error) => {
          // Manejar errores aquí
          console.error(error);
        }
      );
    }
}
