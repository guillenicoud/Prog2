import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'quienes', component: QuienesComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'contacto', component: ContactoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoCComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
