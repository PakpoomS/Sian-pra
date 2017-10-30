import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';

@IonicPage()
@Component({
  selector: 'page-page19',
  templateUrl: 'page19.html',
})
export class Page19Page {
  private db;
  private db2;

  private name;
  private give;
  private sell;

  praImg :any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 setupDB(){
    this.db = new PouchDB('give');
    this.db2 = new PouchDB('sell');
    this.praImg =[];
  }
  ionViewDidLoad(){
    this.setupDB();
    if(this.navParams.get('give_id')!=null){
      this.db.get(this.navParams.get('give_id'),(err, result) =>{
        if(!err){
          this.give = result;
          this.name = result.a2;
          this.praImg = result.cerImg;
        }
      })
     }
     if(this.navParams.get('sell_id')!=null){
      this.db2.get(this.navParams.get('sell_id'),(err, result) =>{
        if(!err){
          this.sell = result;
          this.name = result.a1;
          this.praImg = result.cerImg;
        }
      })
    }

 }
}
