import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import  PouchDB  from 'pouchdb'

@Component({
  selector: 'page-page7',
  templateUrl: 'page7.html'
})
export class Page7Page {

  
  private praImg;
  private praImg2;
  private praImg3;
  private db;
  private db2;
  private db3;
  private give;
  private collec;
  private sell;

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter(){
    this.refresh();

  }

  refresh(){
    this.db = new PouchDB('give');
    this.db2 = new PouchDB('sell');
    this.db3 = new PouchDB('collec');
    
    this.praImg=[];
    this.praImg2=[];
    this.praImg3=[];

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
          
          //this.praImg2 = result.praImg;
        }
      }
    })

    this.db3.allDocs({include_docs: true},(err, result)=>{
      if(!err){
        let rows = result.rows;
        
        for(let i=0; i<rows.length;i++){

          this.collec.push(rows[i].doc);
          
          //this.praImg3 = result.praImg;
        }
      }
    })
  }

  
}
