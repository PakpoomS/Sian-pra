import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PradinDataPage } from'../pradin-data/pradin-data';
import { PradinData2Page } from'../pradin-data2/pradin-data2';
import { PradinData3Page } from'../pradin-data3/pradin-data3';
import { PradinData4Page } from'../pradin-data4/pradin-data4';
import { PradinData5Page } from'../pradin-data5/pradin-data5';

@IonicPage()
@Component({
  selector: 'page-pradin',
  templateUrl: 'pradin.html',
})
export class PradinPage {
  
  private praDin=[];
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad(){
    this.praDin = this.navParams.get('praDin');
  }
  goTo(praDin){
      if(praDin.id == 1){
        this.navCtrl.push(PradinDataPage)
      }else if(praDin.id == 2){
        this.navCtrl.push(PradinData2Page)
      }else if(praDin.id == 3){
        this.navCtrl.push(PradinData3Page)
      }else if(praDin.id == 4){
        this.navCtrl.push(PradinData4Page)
      }else if(praDin.id == 5){
        this.navCtrl.push(PradinData5Page)
      }
  }

}
