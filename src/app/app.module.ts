import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormularioComponent } from './home/formulario/formulario.component';
import { HeaderComponent } from './home/header/header.component';
import { HeaderServiceComponent } from './servicios/header-service/header-service.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiciosComponent,
    ContactoComponent,
    FormularioComponent,
    HeaderComponent,
    HeaderServiceComponent
  ],
  imports: [
    BrowserModule,
    routes,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
