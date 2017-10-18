import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import PouchDB from 'pouchdb';

@Component({
  selector: 'page-page10',
  templateUrl: 'page10.html',
})
export class Page10Page {
  private name;
  private product;
  private location;
  private phone;
  private addit;
  private date;

  private db;

  private contect;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  

  setupDB(){
    this.db = new PouchDB('contect');
  }

  ionViewDidLoad(){
    this.setupDB();
    if(this.navParams.get('contect_id')!=null){
      //เรียกขึ้นมาแก้ไข
      
      this.db.get(this.navParams.get('contect_id'),(err, result) =>{
        
        if(!err){
          this.contect = result;
          this.name = result.name;
          this.product = result.product;
          this.location = result.location;
          this.phone = result.phone;
          this.addit = result.addit;
          this.date = result.date;
        }
      })
    }
  }

  save(){
    if(this.contect){
      this.contect.name = this.name;
      this.contect.product = this.product;
      this.contect.location = this.location;
      this.contect.phone = this.phone;
      this.contect.addit = this.addit;
      this.contect.date = this.date;
      // update จากการแก้ไข
     this.db.put(this.contect,(err, result) => {
       if(!err){
          alert('อัพเดตข้อมูลเรียบร้อย');
          this.navCtrl.pop();
       }
     }); 

    }else{
      //สร้างใหม่
      this.db.post({
        name : this.name,
        product : this.product,
        location : this.location,
        phone : this.phone,
        addit : this.addit,
        date : this.date
      },(err,result)=>{
        if(!err){
          alert('บันทึกเรียบร้อย');
          this.navCtrl.pop();
        }
  
    });
    
    }
    
}

  cancel(){
    this.navCtrl.pop();

  }
}
