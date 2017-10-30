import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pradin-data2',
  templateUrl: 'pradin-data2.html',
})
export class PradinData2Page {

  images =['1.jpg','2.jpg']
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

}
