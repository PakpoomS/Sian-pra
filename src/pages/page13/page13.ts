import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import PouchDB from 'pouchdb';


@Component({
  selector: 'page-page13',
  templateUrl: 'page13.html',
})
export class Page13Page {

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
 private a10;
 private a11;
 private a12;
 private a13;
 private a14;
 private a15;
 private a16;
 private a17;
 private praImg;
 private cerImg;
 private audio;

 private base64Img :string;

 
dis:boolean = true;
dis2:boolean = true;




//ตัวแปรฐานข้อมูล
  private db;
  private sell;

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera,private alertCtrl : AlertController) {}
 
  etcf(){
    this.dis=true;
  }
  etct(){
    this.dis = false;
  }

  setupDB(){
    this.db = new PouchDB('sell');
    this.praImg=[];
    this.cerImg=[];
  }

  ionViewDidLoad(){
    this.setupDB();
    if(this.navParams.get('sell_id')!=null){
      //เรียกขึ้นมาแก้ไข 
      this.db.get(this.navParams.get('sell_id'),(err, result) =>{   
        if(!err){
          this.sell = result;
          this.a1 = result.a1;
          this.a2 = result.a2;
          this.a3 = result.a3;
          this.a4 = result.a4;
          this.a5 = result.a5;
          this.a6 = result.a6;
          this.a7 = result.a7;
          this.a8 = result.a8;
          this.a9 = result.a9;
          this.a10 = result.a10;
          this.a11 = result.a11;
          this.a12 = result.a12;
          this.a13 = result.a13;
          this.a14 = result.a14;
          this.a15 = result.a15;
          this.a16 = result.a16;
          this.a17 = result.a17;
          this.audio = result.audio;
          this.praImg = result.praImg;
          this.cerImg = result.cerImg;
        }
      })
    }
  }
  
  save(){
    if(this.sell){  // update จากการแก้ไข
      this.sell.a1 = this.a1;
      this.sell.a2 = this.a2;
      this.sell.a3 = this.a3;
      this.sell.a4 = this.a4;
      this.sell.a5 = this.a5;
      this.sell.a6 = this.a6;
      this.sell.a7 = this.a7;
      this.sell.a8 = this.a8;
      this.sell.a9 = this.a9;
      this.sell.a10 = this.a10;
      this.sell.a11 = this.a11;
      this.sell.a12 = this.a12;
      this.sell.a13 = this.a13;
      this.sell.a14 = this.a14;
      this.sell.a15 = this.a15;
      this.sell.a16 = this.a16;
      this.sell.a17 = this.a17;
      this.sell.audio = this.audio;
      this.sell.praImg = this.praImg;
      this.sell.cerImg = this.cerImg;
      this.db.put(this.sell,(err, result) => {
       if(!err){
          alert('อัพเดตข้อมูลเรียบร้อย');
          this.navCtrl.pop();
       }
     });
    }else{  //สร้างใหม่
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
        a10 : this.a10,
        a11 : this.a11,
        a12 : this.a12,
        a13 : this.a13,
        a14 : this.a14,
        a15 : this.a15,
        a16 : this.a16,
        audio : this.audio,
        praImg : this.praImg,
        cerImg : this.cerImg
      },(err,result)=>{
        if(!err){
          alert('บันทึกข้อมูลเรียบร้อย');
          this.navCtrl.pop();
        }
    });    
  }
}  
cancel(){
  this.navCtrl.pop();

}
  contectC(){
    this.dis2 = false;

  }
  contectF(){
    this.dis2 = true;
    this.a15 = null;
    this.a16 = null;
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

      takePhotoCer(){
        let options:CameraOptions = {
          destinationType: this.camera.DestinationType.DATA_URL,
          sourceType: this.camera.PictureSourceType.CAMERA,
          encodingType: this.camera.EncodingType.JPEG,
          saveToPhotoAlbum: false,
          correctOrientation: true
          }
          this.camera.getPicture(options).then((imageData) => {
            this.base64Img = 'data:image/jpeg;base64,' + imageData;
            this.cerImg.push(this.base64Img);
            this.cerImg.reverse();
          }, (err) => {
          // Handle error
          });
        }
    
        takePhotoAlbumCer(){
          let options:CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
            encodingType: this.camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            correctOrientation: true
            }
            this.camera.getPicture(options).then((imageData) => {
              this.base64Img = 'data:image/jpeg;base64,' + imageData;
              this.cerImg.push(this.base64Img);
              this.cerImg.reverse();
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

    deletePhoto2(index) {
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
                  .cerImg
                  .splice(index, 1);
                //return true;
              }
            }
          ]
        });
      confirm.present();
    }


}