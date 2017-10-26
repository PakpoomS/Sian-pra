import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-page6',
  templateUrl: 'page6.html'
})
export class Page6Page {
  cerImg : any;
  private db;
  private give;

  constructor(public navCtrl: NavController) {}

  ionViewDidEnter(){
    this.refresh();

  }

  refresh(){
    this.db = new PouchDB('give');
    
    this.give = [];
    
    this.db.allDocs({include_docs: true},(err, result)=>{
      if(!err){
        let rows = result.rows;
        
        for(let i=0; i<rows.length;i++){

          this.give.push(rows[i].doc);
          
          this.cerImg = result.cerImg;
        }
      }
    })
  }


}
