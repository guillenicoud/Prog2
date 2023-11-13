import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { YerbasComponent } from './yerbas/yerbas.component';
import { BombillasComponent } from './bombillas/bombillas.component';
import { RouterModule, Routes } from '@angular/router';


const  appRoutes: Routes=[
  {path: '', component: AppComponent},
  {path: 'yerbas', component: YerbasComponent},
  {path: 'bombillas', component: BombillasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FormComponent,
    YerbasComponent,
    BombillasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
