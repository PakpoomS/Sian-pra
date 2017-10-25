import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';


@Component({
  selector: 'page-page13',
  templateUrl: 'page13.html',
})
export class Page13Page {

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
 private a10;
 private a11;
 private a12;
 private a13;
 private a14;
 private praImg;
 private cerImg;
 //ตัวแปร

  private db;
  private db2;

  private give;
  private sell;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  ionViewDidLoad(){
    if(this.navParams.get('give_id')!=null){
      //เรียกขึ้นมาแก้ไข 
      this.db.get(this.navParams.get('give_id'),(err, result) =>{   
        if(!err){
          this.give = result;
          this.a1 = result.a1;
          this.a2 = result.a2;
          this.a3 = result.a3;
          this.a4 = result.a4;
          this.a5 = result.a5;
          this.a6 = result.a6;
          this.a7 = result.a7;
          this.a8 = result.a8;
          this.a9 = result.a9;
          this.a10 = result.a10;
          this.a11 = result.a11;
          this.a12 = result.a12;
          this.a13 = result.a13;
          this.a14 = result.a14;
          this.praImg = result.praImg;
          this.cerImg = result.cerImg;
        }
      })
    }
  }

  ionViewDidEnter(){
    this.refresh();

  }
  
  refresh(){
    this.db = new PouchDB('give');
    this.db2 = new PouchDB('sell');
    
    this.give = [];
    
    this.db.allDocs({include_docs: true},(err, result)=>{
      if(!err){
        let rows = result.rows;
        
        for(let i=0; i<rows.length;i++){

          this.give.push(rows[i].doc);

        }
      }
    })
  }

  clickSell(){
      this.db2.post({
        a2 : this.a2
      })
  }

}