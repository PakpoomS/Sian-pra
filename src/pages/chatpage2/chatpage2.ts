import { Component } from '@angular/core';
import { NavController,AlertController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
/**
 * Generated class for the Chatpage2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-chatpage2',
  templateUrl: 'chatpage2.html',
})
export class Chatpage2Page {

  ref;
	name;
	newmessage;
  messagesList;

  constructor(public navCtrl: NavController, public alert: AlertController, public NavParams: NavParams) {
  	this.ref = firebase.database().ref('messages');
  }
  ionViewDidLoad(){
  	// Presenting popup
		this.name = this.NavParams.get('username');
    this.newmessage = '';
    this.ref.on('value',data => {
  		let tmp = [];
  		data.forEach( data => {
  			tmp.push({
  				key: data.key,
  				name: data.val().name,
  				message: data.val().message
  			})
  		});
  		this.messagesList = tmp;
  	});
  }
  send(){
  	// add new data to firebase
  	this.ref.push({
  		name: this.name,
  		message: this.newmessage
		});
	
	this.ionViewDidLoad();
  }

}
