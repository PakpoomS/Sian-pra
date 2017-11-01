import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrawanDataPage } from'../prawan-data/prawan-data';
import { PrawanData2Page } from'../prawan-data2/prawan-data2';
import { PrawanData3Page } from'../prawan-data3/prawan-data3';
import { PrawanData4Page } from'../prawan-data4/prawan-data4';
import { PrawanData5Page } from'../prawan-data5/prawan-data5';


/**
 * Generated class for the PrawanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prawan',
  templateUrl: 'prawan.html',
})
export class PrawanPage {

  private praWan=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.praWan = this.navParams.get('praWan');
  }
  goTo(praWan){
      if(praWan.id == 1){
        this.navCtrl.push(PrawanDataPage)
      }else if(praWan.id == 2){
        this.navCtrl.push(PrawanData2Page)
      }else if(praWan.id == 3){
        this.navCtrl.push(PrawanData3Page)
      }else if(praWan.id == 4){
        this.navCtrl.push(PrawanData4Page)
      }else if(praWan.id == 5){
        this.navCtrl.push(PrawanData5Page)
      }
  }

}
