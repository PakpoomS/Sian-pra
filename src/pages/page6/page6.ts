import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page19Page } from '../page19/page19';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})
export class Page6Page {
  private db;
  private db2;
  private db3;
  private give;
  private collec;
  private sell;


  constructor(public navCtrl: NavController ,public navParams : NavParams) {}

  goToPage19(give){
    this.navCtrl.push(Page19Page,{
      give_id : give._id
    })
  }

  goToPage19a(sell){
    this.navCtrl.push(Page19Page,{
      sell_id : sell._id
    })
  }


  ionViewDidEnter(){
    this.refresh();

  }

  refresh(){
    this.db = new PouchDB('give');
    this.db2 = new PouchDB('sell');
    this.db3 = new PouchDB('collec');

    this.give = [];
    this.sell = [];
    this.collec = [];
    
    
    this.db.allDocs({include_docs: true},(err, result)=>{
      if(!err){
        let rows = result.rows;
        
        for(let i=0; i<rows.length;i++){
          this.give.push(rows[i].doc);
        }
      }
    })

    this.db2.allDocs({include_docs: true},(err, result)=>{
      if(!err){
        let rows = result.rows;
        
        for(let i=0; i<rows.length;i++){
          this.sell.push(rows[i].doc);
        }
      }
    })

    this.db3.allDocs({include_docs: true},(err, result)=>{
      if(!err){
        let rows = result.rows;
        
        for(let i=0; i<rows.length;i++){
          this.collec.push(rows[i].doc);
        }
      }
    })
  }

}
