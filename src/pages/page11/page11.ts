import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-page11',
  templateUrl: 'page11.html',
})
export class Page11Page {

  myImg :any;

  constructor(private camera: Camera ,public navCtrl: NavController, public navParams: NavParams) {
  }

  takePicture() {
    let options:CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType: this.camera.PictureSourceType.CAMERA,
    encodingType: this.camera.EncodingType.JPEG, 
    saveToPhotoAlbum: false,
    correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      this.myImg = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    // Handle error
  });
 }

  ionViewDidLoad(){
    console.log("Hello");

  }


}
