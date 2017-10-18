import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Page10Page } from '../page10/page10';
import PouchDB from 'pouchdb'

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3Page {

  
  private contect;
  
  private db;

  constructor(public navCtrl: NavController,public navParams: NavParams){
  }
  goToPage10(){
    this.navCtrl.push(Page10Page)
  }

  
  ionViewDidEnter(){
    this.refresh();

  }

  refresh(){
    this.db = new PouchDB('contect');
    
    this.contect = [];
    
    this.db.allDocs({include_docs: true},(err, result)=>{
      if(!err){
        let rows = result.rows;
        
        for(let i=0; i<rows.length;i++){

          this.contect.push(rows[i].doc);

        }
      }
    })
  }

  edit(contect){
    
    this.navCtrl.push(Page10Page,{
     contect_id : contect._id
    })

  }

  delete(contect){
    if(confirm('คุณต้องการลบข้อมูลนี้ใช่ไหม ?')){
      this.db.remove(contect, (err , result) =>{
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
      this.contect = this.contect.filter((contect:any) =>{
        return (contect.name.toLowerCase().indexOf(val.toLowerCase()) >-1);
      })
    }else{
      this.refresh();
    }
  }


} // ปิด 