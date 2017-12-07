import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Chatpage2Page} from'../chatpage2/chatpage2';

/**
 * Generated class for the ChatpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-chatpage',
  templateUrl: 'chatpage.html',
})
export class ChatpagePage {

  username : string = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alertCtrl: AlertController) {}

              showAlert(title: string, message: string) {
                let alertBox = this.alertCtrl.create({
                  title: title,
                  subTitle: message,
                  buttons: ['ตกลง']
                });
                alertBox.present();
              }
          
              loginUser() {
                if(/^[a-zA-Z0-9ก-๙]+$/.test(this.username)) {
                  // all cool
                  this.navCtrl.push(Chatpage2Page, {
                      username: this.username
                  });
              } else {
                  this.showAlert('ผิดพลาด', 'ชื่อคุณไม่ถูกต้อง');
              }

    }
}
