import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';
import { Page17Page } from '../page17/page17';
import { Page18Page } from '../page18/page18';

@Component({
  selector: 'page-page9',
  templateUrl: 'page9.html'
})
export class Page9Page {

  private text;
  
  private db;

  constructor(public navCtrl: NavController,public navParams : NavParams) {}
  
  goToPage17(){
    this.navCtrl.push(Page17Page)
  }

  goToPage18(text){
    this.navCtrl.push(Page18Page,{
      text_id : text._id
    })

  }


  ionViewDidEnter(){
    this.refresh();

  }

  refresh(){
    this.db = new PouchDB('text');
    
    this.text = [];
    
    this.db.allDocs({include_docs: true},(err, result)=>{
      if(!err){
        let rows = result.rows;
        
        for(let i=0; i<rows.length;i++){

          this.text.push(rows[i].doc);

        }
      }
    })
  }
  

  edit(text){ 
    this.navCtrl.push(Page17Page,{
      text_id : text._id
    })

  }

  delete(text){
    if(confirm('คุณต้องการลบข้อมูลนี้ใช่ไหม ?')){
      this.db.remove(text, (err , result) =>{
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
      this.text = this.text.filter((text:any) =>{
        return (text.a1.toLowerCase().indexOf(val.toLowerCase()) >-1);
      })
    }else{
      this.refresh();
    }
  }

}
