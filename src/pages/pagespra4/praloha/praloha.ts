import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PralohaDataPage } from '../praloha-data/praloha-data';
import { PralohaData2Page } from '../praloha-data2/praloha-data2';
import { PralohaData3Page } from '../praloha-data3/praloha-data3';
import { PralohaData4Page } from '../praloha-data4/praloha-data4';
import { PralohaData5Page } from '../praloha-data5/praloha-data5';





/**
 * Generated class for the PralohaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-praloha',
  templateUrl: 'praloha.html',
})
export class PralohaPage {

  private praLoha=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.praLoha = this.navParams.get('praLoha');
  }
  goTo(praLoha){
      if(praLoha.id == 1){
        this.navCtrl.push(PralohaDataPage)
      }else if(praLoha.id == 2){
        this.navCtrl.push(PralohaData2Page)
      }else if(praLoha.id == 3){
        this.navCtrl.push(PralohaData3Page)
      }else if(praLoha.id == 4){
        this.navCtrl.push(PralohaData4Page)
      }else if(praLoha.id == 5){
        this.navCtrl.push(PralohaData5Page)
      }
  }

}
