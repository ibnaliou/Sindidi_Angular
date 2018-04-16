import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { BienService } from '../../service/bien.service';
import { Bien } from '../../interface/bien';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit {

	bien : Bien;
  imageSrc : string;

	constructor(
		private location: Location,
		private route: ActivatedRoute,
		private bienService : BienService
	) { }

	ngOnInit() {
		this.getbien();
	}

	getbien(){
	  	const id = +this.route.snapshot.paramMap.get('id');

	  	this.bienService.getBien(id).subscribe(resultat => {
        if(resultat.code ==1 ){
          window.location.href="http://localhost:4200/accueil"
        }
	  		this.bien = resultat.result as Bien;
        this.imageSrc = this.bien.images[0].image;
	  		console.log(resultat)
	  	});
	}



}
