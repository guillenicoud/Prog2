import { Component } from "@angular/core";

@Component ({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent {
   mates = [
    {nombre: 'Torpedo', precio: '20$usd', imageUrl: 'assets/torpedo.jpg'},
    {nombre: 'Camionero', precio: '25$usd', imageUrl: 'assets/camionero.jpg'},
    {nombre: 'Imperial', precio: '30$usd', imageUrl: 'assets/imperial.webp'},
    
   ];

   getMates() {
    return this.mates;
   }
}
