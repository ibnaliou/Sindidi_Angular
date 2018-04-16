import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BienService } from '../../service/bien.service';
import { Client } from '../../interface/client.app';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

	connexion = false;
  client : Client;

  constructor(
    private route: ActivatedRoute,
    private bienService : BienService
  ) { }

  ngOnInit() {
  }
}
