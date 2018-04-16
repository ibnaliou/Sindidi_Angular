import { Image } from './image';
import { Localite } from './localite';
import { Proprietaire } from './proprietaire';
import { TypeBien } from './type-bien';

export interface Bien {
	id : number;
	nombien : string;
	etat : number;
	description : string;
	prixlocation : number;
	proprietaire : Proprietaire;
	localite : Localite;
	type : TypeBien;
	niveau : number;
	images : Image[];
}
