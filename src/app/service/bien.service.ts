import { Injectable } from '@angular/core';

import { Bien } from '../interface/bien';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type':  'application/json'
	})
};

@Injectable()
export class BienService {

	api = "http://localhost:8000/api"

  	constructor(private http : HttpClient) { }

  	getAllBien() : Observable<any> {
  		return this.http.get(this.api+'/allBiens');
  	}

		getAllType() : Observable<any> {
  		return this.http.get(this.api+'/alltype');
  	}

		getAllLocalites() : Observable<any> {
  		return this.http.get(this.api+'/alllocalite');
  	}

  	getBien(id) : Observable<any> {
  		return this.http.get(this.api+`/bien/${ id }`);
  	}

		getBienByType(idBien, idLocalite) : Observable<any> {
  		return this.http.get(`http://localhost:8001/api/biensType/${ idBien }/${ idLocalite }`);
  	}

		addReservation(idBien, client) : Observable<any>{
			return this.http.post(`http://localhost:8001/api/addreservation/${ idBien }`, JSON.parse(JSON.stringify(client)), httpOptions)
		}

}
