import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Page14Page } from '../page14/page14';
import { Page15Page } from '../page15/page15';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-page8',
  templateUrl: 'page8.html'
})
export class Page8Page {

  constructor(public navCtrl: NavController,public navParams : NavParams) {}

  private collec;
  
  private db;

  goToPage14(){
    this.navCtrl.push(Page14Page)
  }

  goToPage15(collec){
    this.navCtrl.push(Page15Page,{
      collec_id : collec._id
    })

  }
  
  ionViewDidEnter(){
    this.refresh();

  }

  refresh(){
    this.db = new PouchDB('collec');
    
    this.collec = [];
    
    this.db.allDocs({include_docs: true},(err, result)=>{
      if(!err){
        let rows = result.rows;
        
        for(let i=0; i<rows.length;i++){

          this.collec.push(rows[i].doc);

        }
      }
    })
  }

  edit(collec){ 
    this.navCtrl.push(Page14Page,{
     collec_id : collec._id
    })

  }

  delete(give){
    if(confirm('คุณต้องการลบข้อมูลนี้ใช่ไหม ?')){
      this.db.remove(give, (err , result) =>{
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
      this.collec = this.collec.filter((collec:any) =>{
        return (collec.a1.toLowerCase().indexOf(val.toLowerCase()) >-1);
      })
    }else{
      this.refresh();
    }
  }

}
