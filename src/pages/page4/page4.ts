import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Page11Page } from '../page11/page11';
import { Page12Page } from '../page12/page12';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class Page4Page {
  
  private give;

  private db;

  constructor(public navCtrl: NavController,public navParams : NavParams) {}

  goToPage11(){
    this.navCtrl.push(Page11Page)
  }

  goToPage12(give){
    this.navCtrl.push(Page12Page,{
     give_id : give._id
    })

  }


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

        }
      }
    })
  }
  

  edit(give){ 
    this.navCtrl.push(Page11Page,{
     give_id : give._id
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
      this.give = this.give.filter((give:any) =>{
      return (give.a2.toLowerCase().indexOf(val.toLowerCase()) >-1)|| 
      (give.a3.toLowerCase().indexOf(val.toLowerCase()) >-1) ||  
      (give.a4.toLowerCase().indexOf(val.toLowerCase()) >-1) ;
    })}
      else{
      this.refresh();
    }
  }

}
