import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import PouchDB from 'pouchdb';


@Component({
  selector: 'page-page14',
  templateUrl: 'page14.html',
})
export class Page14Page {

  
  // ตัวแปรข้อมูลทั้งหมด
  private a1;
  private a2;
  private a3;
  private a4;
  private a5;
  private a6;
  private a7;
  private a8;
  private a9;
  private praImg;
  private base64Img :string;
  //ตัวแปร
  private db;

  //ตัวแปร Database
  private collec;

  dis:boolean = true;
  dis2:boolean = true;

  constructor(private camera : Camera , public navCtrl: NavController, public navParams: NavParams,public alertCtrl : AlertController) {}

  etcf(){
    this.dis=true;
  }
  etct(){
    this.dis = false;
  }

  setupDB(){
    this.db = new PouchDB('collec');
    this.praImg=[];
  }

  ionViewDidLoad(){
    this.setupDB();
    if(this.navParams.get('collec_id')!=null){
      //เรียกขึ้นมาแก้ไข 
      this.db.get(this.navParams.get('collec_id'),(err, result) =>{   
        if(!err){
          this.collec = result;
          this.a1 = result.a1;
          this.a2 = result.a2;
          this.a3 = result.a3;
          this.a4 = result.a4;
          this.a5 = result.a5;
          this.a6 = result.a6;
          this.a7 = result.a7;
          this.a8 = result.a8;
          this.a9 = result.a9;
          this.praImg = result.praImg;
        }
      })
    }
  }

  save(){
    if(this.collec){
      this.collec.a1 = this.a1;
      this.collec.a2 = this.a2;
      this.collec.a3 = this.a3;
      this.collec.a4 = this.a4;
      this.collec.a5 = this.a5;
      this.collec.a6 = this.a6;
      this.collec.a7 = this.a7;
      this.collec.a8 = this.a8;
      this.collec.a9 = this.a9;
      this.collec.praImg = this.praImg;
      // update จากการแก้ไข
     this.db.put(this.collec,(err, result) => {
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
        a4 : this.a4,
        a5 : this.a5,
        a6 : this.a6,
        a7 : this.a7,
        a8 : this.a8,
        a9 : this.a9,
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

    deletePhoto(index) {
      let confirm = this
        .alertCtrl
        .create({
          title: 'คุณต้องการลบภาพนี้ใช่หรือไม่ ?',
          message: '',
          buttons: [
            {
              text: 'ยกเลิก',
              handler: () => {
                console.log('Disagree clicked');
              }
            }, {
              text: 'ตกลง',
              handler: () => {
                console.log('Agree clicked');
                this
                  .praImg
                  .splice(index, 1);
                //return true;
              }
            }
          ]
        });
      confirm.present();
    }
}
