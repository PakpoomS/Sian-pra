import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pradin-data',
  templateUrl: 'pradin-data.html',
})
export class PradinDataPage {
  
  images =['1.jpg','2.jpg','3.jpg']
    
  constructor(public navCtrl: NavController, public navParams: NavParams) {}



  ionViewDidLoad() {
   
  }

}
