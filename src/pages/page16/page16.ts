import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import PouchDB from 'pouchdb'
import { Media , MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

/**
 * Generated class for the Page16Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page16',
  templateUrl: 'page16.html',
})
export class Page16Page {

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
  private praImg;
  private cerImg;
  private audio : MediaObject;

  auPath: string;
  auName: string;
  audioList : any[] =[];
  recording : boolean = false;

  private db;
  private sell;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private file : File,
              private media : Media,
              private platform : Platform) {
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
          this.audioList = result.audioList;
          this.praImg = result.praImg;
          this.cerImg = result.cerImg;
        }
      })
    }
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
