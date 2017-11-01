import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrachinDataPage } from '../prachin-data/prachin-data';
import { PrachinData2Page } from '../prachin-data2/prachin-data2';

@IonicPage()
@Component({
  selector: 'page-prachin',
  templateUrl: 'prachin.html',
})
export class PrachinPage {

  private praChin=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.praChin = this.navParams.get('praChin');
  }
  goTo(praChin){
      if(praChin.id == 1){
        this.navCtrl.push(PrachinDataPage)
      }else if(praChin.id == 2){
        this.navCtrl.push(PrachinData2Page)
      }
  }

}
