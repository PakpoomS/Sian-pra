import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Page13Page } from '../page13/page13';
import { Calendar } from '@ionic-native/calendar';
import PouchDB from 'pouchdb'

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3Page {

  
  private db;
  private sell;

  private a15 : string ="ถูกยกเลิก";
  

  constructor(public navCtrl: NavController,public navParams: NavParams,private calendar : Calendar){
  }
  goToPage13(){
    this.navCtrl.push(Page13Page)
  }

  goToPage16(sell){
    this.calendar.openCalendar(new Date(sell.a16))
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
    if(confirm('คุณต้องการยกเลิกนัดหมายนี้ใช่ไหม ?')){
    this.calendar.deleteEvent(sell.a1,sell.a7,sell.a4,new Date(sell.a16),new Date(sell.a16))
    sell.a15 = this.a15 ;
    this.db.put(sell,(err, result)=>{
      if(!err){
        alert('ลบข้อมูลการนัดหมายเรียบร้อย');
      }
    });
  }
  }
  
  getItems(ev :any){
    let val = ev.target.value;
    if(val && val.trim() != ''){
      this.sell = this.sell.filter((contect:any) =>{
        return (contect.name.toLowerCase().indexOf(val.toLowerCase()) >-1);
      })
    }else{
      this.refresh();
    }
  }


} // ปิด 