import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';




//Importar los modulos de los componentes creados
import { PortfolioModule } from './@component/portfolio/portfolio.module';
import { NavbarModule } from './@component/navbar/navbar.module';
import { HeaderModule } from './@component/header/header.module';
import { FooterModule } from './@component/footer/footer.module';
import { CopyrightModule } from './@component/copyright/copyright.module';
import { ContactModule } from './@component/contact/contact.module';
import { AboutModule } from './@component/about/about.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortfolioModule,
    NavbarModule,
    HeaderModule,
    FooterModule,
    CopyrightModule,
    ContactModule,
    AboutModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
