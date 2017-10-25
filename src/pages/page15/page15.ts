import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-page15',
  templateUrl: 'page15.html',
})
export class Page15Page {
  praImg : any ;
  cerImg : any ;

  // ตัวแปรข้อมูลทั้งหมด
  private a1;
  private a2;
  private a3;
  private a4;
  private a5;
  private a6;
  private a7;
  private a8;
  private a9;

  //ตัวแปร
  private db;

  //ตัวแปร Database
  private collec;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  setupDB(){
    this.db = new PouchDB('collec');
  }

  ionViewDidLoad(){
    this.setupDB();
    if(this.navParams.get('collec_id')!=null){
      //เรียกขึ้นมาโชว์
      
      this.db.get(this.navParams.get('collec_id'),(err, result) =>{   
        if(!err){
          this.collec = result;
          this.a1 = result.a1;
          this.a2 = result.a2;
          this.a3 = result.a3;
          this.a4 = result.a4;
          this.a5 = result.a5;
          this.a6 = result.a6;
          this.a7 = result.a7;
          this.a8 = result.a8;
          this.a9 = result.a9;
          this.praImg = result.praImg;
        }
      })
    }
  }

}
