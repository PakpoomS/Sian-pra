import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrapongDataPage } from '../prapong-data/prapong-data';
import { PrapongData2Page } from '../prapong-data2/prapong-data2';
import { PrapongData3Page } from '../prapong-data3/prapong-data3';
import { PrapongData4Page } from '../prapong-data4/prapong-data4';
import { PrapongData5Page } from '../prapong-data5/prapong-data5';



@IonicPage()
@Component({
  selector: 'page-prapong',
  templateUrl: 'prapong.html',
})
export class PrapongPage {

  private praPong=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.praPong = this.navParams.get('praPong');
  }
  goTo(praPong){
      if(praPong.id == 1){
        this.navCtrl.push(PrapongDataPage)
      }else if(praPong.id == 2){
        this.navCtrl.push(PrapongData2Page)
      }else if(praPong.id == 3){
        this.navCtrl.push(PrapongData3Page)
      }else if(praPong.id == 4){
        this.navCtrl.push(PrapongData4Page)
      }else if(praPong.id == 5){
        this.navCtrl.push(PrapongData5Page)
      }
  }

}
