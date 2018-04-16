import { Component, OnInit } from '@angular/core';

import { Client } from '../../../interface/client.app';
import { BienService } from '../../../service/bien.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  client : Client;

  constructor(
    private route: ActivatedRoute,
    private bienService : BienService
  ) { }

  ngOnInit() {
  }

  send(bienForm){
    this.client = bienForm as Client;
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(this.client)
    this.bienService.addReservation(id, this.client).subscribe(res => {
      window.location.href="http://localhost:4200/accueil"
    })
  }
}
