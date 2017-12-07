import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';



import { Page1Page } from '../pages/page1/page1';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
    rootPage:any = Page1Page;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    let config = {
      apiKey: "AIzaSyD6OZgO-6Q6SlMLgcQDJe53Kc-y9j82oiU",
      authDomain: "sian-pra.firebaseapp.com",
      databaseURL: "https://sian-pra.firebaseio.com",
      projectId: "sian-pra",
      storageBucket: "sian-pra.appspot.com",
      messagingSenderId: "265633178027"
    };
    firebase.initializeApp(config);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}
