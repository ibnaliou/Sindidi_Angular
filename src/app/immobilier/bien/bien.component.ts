import { Component, OnInit, Input } from '@angular/core';

import { Bien } from '../../interface/bien';

@Component({
  selector: 'app-bien',
  templateUrl: './bien.component.html',
  styleUrls: ['./bien.component.css']
})
export class BienComponent implements OnInit {

	@Input() bien : Bien;
  	constructor() { }

	ngOnInit() {
	}

}
