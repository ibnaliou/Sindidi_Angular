import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CatalogueComponent }   from './immobilier/catalogue/catalogue.component';
import { DetailBienComponent }      from './immobilier/detail-bien/detail-bien.component';
import { NoteFoundComponent }      from './note-found/note-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: CatalogueComponent },
  { path: 'detail/:id', component: DetailBienComponent },
  { path: '**', component: NoteFoundComponent }
	];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
