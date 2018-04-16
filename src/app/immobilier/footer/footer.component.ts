import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = 'NOUS SOMME LA';
  lat: number = 14.497401;
  lng: number = -14.452362;
  
}
