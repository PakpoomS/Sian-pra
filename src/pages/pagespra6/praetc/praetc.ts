import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PraetcDataPage } from '../praetc-data/praetc-data';
import { PraetcData2Page } from '../praetc-data2/praetc-data2';

/**
 * Generated class for the PraetcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-praetc',
  templateUrl: 'praetc.html',
})
export class PraetcPage {

  private praEtc=[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.praEtc = this.navParams.get('praEtc');
  }
  goTo(praEtc){
    if(praEtc.id == 1){
      this.navCtrl.push(PraetcDataPage)
    }else if(praEtc.id == 2){
      this.navCtrl.push(PraetcData2Page)
    }
}

}
