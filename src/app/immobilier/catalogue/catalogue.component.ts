import { Component, OnInit } from '@angular/core';

import { BienService } from '../../service/bien.service';
import { Bien } from '../../interface/bien';
import { TypeBien } from '../../interface/type-bien';
import { Localite } from '../../interface/localite';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

	Biens : Bien[];
  Types : TypeBien[];
  Localites : Localite[];
  p: number = 1;

  	constructor(private bienService : BienService) { }

	ngOnInit() {
		this.getBiens();
    this.getTypes();
    this.getLocalites();
	}

	getBiens(){
		this.bienService.getAllBien().subscribe(resultat => {
  		this.Biens = resultat.result as Bien[];
	  	})
	}

  getTypes(){
		this.bienService.getAllType().subscribe(resultat => {
  		this.Types = resultat.result as TypeBien[];
	  	})
	}

  getLocalites(){
		this.bienService.getAllLocalites().subscribe(resultat => {
  		this.Localites = resultat.result as Localite[];
	  	})
	}

  test(idBien, idLocalite){
    this.bienService.getBienByType(idBien, idLocalite).subscribe(resultat => {
  		this.Biens = resultat.result as Bien[];
	  	})
  }

}
