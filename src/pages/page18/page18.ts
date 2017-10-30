import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';

/**
 * Generated class for the Page18Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page18',
  templateUrl: 'page18.html',
})
export class Page18Page {

  private a1;
  private a2;
  private a3;
  private praImg;

  private db;
  private text;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  setupDB(){
    this.db = new PouchDB('text');
    this.praImg=[];
  }
  ionViewDidLoad(){
    this.setupDB();
    if(this.navParams.get('text_id')!=null){
      //เรียกขึ้นมาแก้ไข 
      this.db.get(this.navParams.get('text_id'),(err, result) =>{   
        if(!err){
          this.text = result;
          this.a1 = result.a1;
          this.a2 = result.a2;
          this.a3 = result.a3;
          this.praImg = result.praImg;
        }
      })
    }
  }

}
