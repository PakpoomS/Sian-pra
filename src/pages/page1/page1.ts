import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashScreen} from '@ionic-native/splash-screen';
import { Page2Page } from '../page2/page2';
import { Page3Page } from '../page3/page3';
import { Page4Page } from '../page4/page4';
import { Page5Page } from '../page5/page5';
import { Page6Page } from '../page6/page6';
import { Page8Page } from '../page8/page8';
import { Page9Page } from '../page9/page9';
import { Page7Page } from '../page7/page7';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1Page {

  constructor(public navCtrl: NavController,private splashScreen: SplashScreen) {
  }

  goToPage2(params){
    if (!params) params = {};
    this.navCtrl.push(Page2Page);
  }goToPage3(params){
    if (!params) params = {};
    this.navCtrl.push(Page3Page);
  }goToPage4(params){
    if (!params) params = {};
    this.navCtrl.push(Page4Page);
  }goToPage5(params){
    if (!params) params = {};
    this.navCtrl.push(Page5Page);
  }goToPage6(params){
    if (!params) params = {};
    this.navCtrl.push(Page6Page);
  }goToPage8(params){
    if (!params) params = {};
    this.navCtrl.push(Page8Page);
  }goToPage9(params){
    if (!params) params = {};
    this.navCtrl.push(Page9Page);
  }goToPage7(params){
    if (!params) params = {};
    this.navCtrl.push(Page7Page);
  }
}
