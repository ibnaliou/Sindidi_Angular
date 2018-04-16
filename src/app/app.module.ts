import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CatalogueComponent } from './immobilier/catalogue/catalogue.component';
import { FormBienComponent } from './immobilier/form-bien/form-bien.component';
import { BienComponent } from './immobilier/bien/bien.component';
import { DetailBienComponent } from './immobilier/detail-bien/detail-bien.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormClientComponent } from './immobilier/form-client/form-client.component';
import { BienService } from './service/bien.service';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './immobilier/nav/nav.component';
import { MaterialModule } from './material.module';
import { ConnexionComponent } from './immobilier/form-client/connexion/connexion.component';
import { InscriptionComponent } from './immobilier/form-client/inscription/inscription.component';
import { FormsModule } from '@angular/forms';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { NoteFoundComponent } from './note-found/note-found.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './immobilier/footer/footer.component';
import {  ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    CatalogueComponent,
    FormBienComponent,
    BienComponent,
    DetailBienComponent,
    FormClientComponent,
    NavComponent,
    ConnexionComponent,
    InscriptionComponent,
    ImmobilierComponent,
    NoteFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    NgxPaginationModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAi0r26sXBJgZrEr81Rf35ljbYHSbKTXlY'
    })
  ],

  providers: [
    BienService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
