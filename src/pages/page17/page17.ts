import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import PouchDB from 'pouchdb';

@IonicPage()
@Component({
  selector: 'page-page17',
  templateUrl: 'page17.html',
})
export class Page17Page {

  private a1;
  private a2;
  private a3;
  private praImg;

  private base64Img :string;

  private db;
  private text;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {}

  setupDB(){
    this.db = new PouchDB('text');
    this.praImg=[];
  }

  ionViewDidLoad(){
    this.setupDB();
    if(this.navParams.get('text_id')!=null){
      //เรียกขึ้นมาแก้ไข 
      this.db.get(this.navParams.get('text_id'),(err, result) =>{   
        if(!err){
          this.text = result;
          this.a1 = result.a1;
          this.a2 = result.a2;
          this.a3 = result.a3;
          this.praImg = result.praImg;
        }
      })
    }
  }
  save(){
    if(this.text){
      this.text.a1 = this.a1;
      this.text.a2 = this.a2;
      this.text.a3 = this.a3;
      this.text.praImg = this.praImg;
      // update จากการแก้ไข
     this.db.put(this.text,(err, result) => {
       if(!err){
          alert('อัพเดตข้อมูลเรียบร้อย');
          this.navCtrl.pop();
       }
     }); 

    }else{
      //สร้างใหม่
      this.db.post({
        a1 : this.a1,
        a2 : this.a2,
        a3 : this.a3,
        praImg : this.praImg
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

//ถ่ายจากกล้อง
takePhotoPra(){
  let options:CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.CAMERA,
    encodingType: this.camera.EncodingType.JPEG,
    saveToPhotoAlbum: false,
    correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.base64Img = 'data:image/jpeg;base64,' + imageData;
      this.praImg.push(this.base64Img);
      this.praImg.reverse();
    }, (err) => {
    // Handle error
    });
  }

  takePhotoAlbumPra(){
    let options:CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      correctOrientation: true
      }
      this.camera.getPicture(options).then((imageData) => {
        this.base64Img = 'data:image/jpeg;base64,' + imageData;
        this.praImg.push(this.base64Img);
        this.praImg.reverse();
      }, (err) => {
      // Handle error
      });
    }




}
