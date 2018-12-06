import { Injectable } from '@angular/core';
import { Cupang } from '../cupang/cupang.model';
import { Tipe } from '../shared/tipe.model';
import { Subject } from 'rxjs/Subject';
@Injectable(

)
export class CupangService {
  cupangsChanged=new Subject<Cupang[]>();

  private cupangs:Cupang[]=[
    new Cupang('nusantara','kopi nusantara.',
  'http://www.pesona.co.id/img/images_article/006_001_90_pic.jpg',
  [
    new Tipe('moon',1),
    new Tipe('Hellboy',1),
  ]),
  new Cupang('Lalapan','lalapan makanan khas anak kost dan lezaaaatt','../src/app/img/lalapan.jpg',

[
  new Tipe('chicken',1),
  new Tipe('lele',3),
  new Tipe('egg',1),
  new Tipe('spices',1)
]),  
];

  getCupangs(){
    return this.cupangs.slice();
  }
 
  getCupang(index:number){
    return this.cupangs [index] ;
  }
constructor() { 
}
  setCupangs(cupangs: Cupang[]) {
    this.cupangs = cupangs;
    this.cupangsChanged.next(this.cupangs.slice());
  }

addCupang(cupang: Cupang){
this.cupangs.push(cupang);
this.cupangsChanged.next(this.cupangs.slice());
}
updateCupang(index: number, newCupang: Cupang){
this .cupangs[index]= newCupang;
this.cupangsChanged.next(this.cupangs.slice());
}
deleteCupang(index: number){
  this.cupangs.splice(index, 1);
  this.cupangsChanged.next(this.cupangs.slice());
}
}