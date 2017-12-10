import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController,Platform} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';
import PouchDB from 'pouchdb';


@Component({
  selector: 'page-page11',
  templateUrl: 'page11.html',
})
export class Page11Page {

  
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
  private praImg;
  private cerImg;
  private audio : MediaObject;
  auName:string ;
  auPath:string ;
  audioList : any[] =[];

  recording : boolean = false;
  private base64Img :string;

  //ตัวแปร
  private db;

  //ตัวแปร Database
  private give;



  dis:boolean = true;
  dis2:boolean = true;


  constructor(private camera: Camera ,
              public navCtrl: NavController, 
              public navParams: NavParams, 
              private alertCtrl : AlertController,
              private file : File,
              private media: Media,
              private platform : Platform) {}
  
  etcf(){
    this.dis=true;
  }
  etct(){
    this.dis = false;
  }

  setupDB(){
    this.db = new PouchDB('give');
    this.praImg=[];
    this.cerImg=[];
  }
  
  ionViewDidLoad(){
    this.setupDB();
    if(this.navParams.get('give_id')!=null){
      //เรียกขึ้นมาแก้ไข 
      this.db.get(this.navParams.get('give_id'),(err, result) =>{   
        if(!err){
          this.give = result;
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
          this.audioList = result.audioList;
          this.praImg = result.praImg;
          this.cerImg = result.cerImg;
        }
      })
    }
  }

  save(){
    if(this.give){
      this.give.a1 = this.a1;
      this.give.a2 = this.a2;
      this.give.a3 = this.a3;
      this.give.a4 = this.a4;
      this.give.a5 = this.a5;
      this.give.a6 = this.a6;
      this.give.a7 = this.a7;
      this.give.a8 = this.a8;
      this.give.a9 = this.a9;
      this.give.a10 = this.a10;
      this.give.a11 = this.a11;
      this.give.a12 = this.a12;
      this.give.a13 = this.a13;
      this.give.a14 = this.a14;
      this.give.audioList = this.audioList;
      this.give.praImg = this.praImg;
      this.give.cerImg = this.cerImg;
      // update จากการแก้ไข
     this.db.put(this.give,(err, result) => {
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
        a10 : this.a10,
        a11 : this.a11,
        a12 : this.a12,
        a13 : this.a13,
        a14 : this.a14,
        audioList : this.audioList,
        praImg : this.praImg,
        cerImg : this.cerImg
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
  getAudioList() {
    if(localStorage.getItem("audiolist")) {
      this.audioList = JSON.parse(localStorage.getItem("audiolist"));
      console.log(this.audioList);
    }
  }
  

  startRecord(){
    if (this.platform.is('ios')) {
    this.auName = 'record'+ new Date().getMinutes()+new Date().getSeconds()+this.a1 +'.m4a';
    this.auPath = this.file.documentsDirectory.replace(/file:\/\//g,'') + this.auName;
    this.audio = this.media.create(this.auPath);
    }else if(this.platform.is('android')){
    this.auName = 'record'+ new Date().getMinutes()+new Date().getSeconds()+this.a1 +'.3gp';
    this.auPath = this.file.externalDataDirectory.replace(/file:\/\//g,'') + this.auName;
    this.audio = this.media.create(this.auPath);
    }
    this.audio.startRecord();
    this.recording = true;
  }
  stopRecord(){
    this.audio.stopRecord();
    let data = { filename: this.auName };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
  }
  playAudio(file,idx){
    if (this.platform.is('ios')) {
    this.auPath = this.file.documentsDirectory.replace(/file:\/\//g,'') + file;
    this.audio = this.media.create(this.auPath);
    }else if(this.platform.is('android')) {
    this.auPath = this.file.externalDataDirectory.replace(/file:\/\//g,'') + file;
    this.audio = this.media.create(this.auPath);
    }
    this.audio.play();
    this.audio.setVolume(0.8);
  }
 

    
}
