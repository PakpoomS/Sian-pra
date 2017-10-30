import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Page13Page } from '../page13/page13';
import {Page16Page} from '../page16/page16';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class Page5Page {
  
  private sell;
  private db;

  constructor(public navCtrl: NavController,public navParams: NavParams) {}

  goToPage16(sell){
    this.navCtrl.push(Page16Page,{
      sell_id : sell._id
    })
  }

  goToPage13(){
    this.navCtrl.push(Page13Page)
  }

  ionViewDidEnter(){
    this.refresh();

  }

  refresh(){
    this.db = new PouchDB('sell');
    
    this.sell = [];
    
    this.db.allDocs({include_docs: true},(err, result)=>{
      if(!err){
        let rows = result.rows;
        for(let i=0; i<rows.length;i++){
          this.sell.push(rows[i].doc);
        }
      }
    })
  }

  edit(sell){
    
    this.navCtrl.push(Page13Page,{
     sell_id : sell._id
    })

  }

  delete(sell){
    if(confirm('คุณต้องการลบข้อมูลนี้ใช่ไหม ?')){
      this.db.remove(sell, (err , result) =>{
        if(!err){
          alert('ลบข้อมูลเรียบร้อย');
          this.refresh();
        }
      })
    }
  }
  
  getItems(ev :any){
    let val = ev.target.value;
    if(val && val.trim() != ''){
      this.sell = this.sell.filter((sell:any) =>{
        return (sell.a1.toLowerCase().indexOf(val.toLowerCase()) >-1);
      })
    }else{
      this.refresh();
    }
  }

}
