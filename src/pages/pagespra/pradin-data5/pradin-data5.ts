import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pradin-data5',
  templateUrl: 'pradin-data5.html',
})
export class PradinData5Page {
  images =['1.jpg','2.jpg']
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  
  }

}
