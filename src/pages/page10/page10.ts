import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-page10',
  templateUrl: 'page10.html',
})
export class Page10Page {
  
  private db;
  private db2;
  private db3;

  private name;
  private give;
  private sell;
  private collec;
  praImg :any;
  praImg2:any;
  praImg3:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  

  setupDB(){
    this.db = new PouchDB('give');
    this.db2 = new PouchDB('sell');
    this.db3 = new PouchDB('collec');
    this.praImg =[];
    this.praImg2=[];
    this.praImg3=[];
  }
  ionViewDidLoad(){
    this.setupDB();
    if(this.navParams.get('give_id')!=null){
      this.db.get(this.navParams.get('give_id'),(err, result) =>{
        if(!err){
          this.give = result;
          this.name = result.a2;
          this.praImg = result.praImg;
        }
      })
     }
     if(this.navParams.get('sell_id')!=null){
      this.db2.get(this.navParams.get('sell_id'),(err, result) =>{
        if(!err){
          this.sell = result;
          this.name = result.a1;
          this.praImg = result.praImg;
        }
      })
    }
    if(this.navParams.get('collec_id')!=null){
      this.db3.get(this.navParams.get('collec_id'),(err, result) =>{
        if(!err){
          this.collec = result;
          this.name = result.a1;
          this.praImg = result.praImg;
        }
      })
  }


 }
}
