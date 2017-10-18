import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page11Page } from '../page11/page11';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4Page {

  constructor(public navCtrl: NavController) {
  }
  goToPage11(){
    this.navCtrl.push(Page11Page)
  }
  
}
