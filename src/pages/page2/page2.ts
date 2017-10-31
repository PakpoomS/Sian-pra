import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { PradinPage } from'../pagespra/pradin/pradin';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2Page {

  //ตัวแปรฐานข้อมูล
  
  private praDin = [];
  private a1='พระคงดำวัดพระคงฤาษี พิมพ์นิยม 1';
  private a2='พระคงวัดพระคงฤาษี พิมพ์ที่ 2';
  private a3='พระคงวัดพระคงฤาษี พิมพ์ที่ 4';
  private a4='พระคงวัดพระคงฤาษี พิมพ์นิยม  1 ( เส้นน้ำตก  )';
  private a5='พระรอดพิมพ์ใหญ่วัดมหาวัน (พิมพ์อุนาโลม)';

  private praChin =[];
  private b1 ='พระมเหศวร ชินเงิน พิมพ์หน้าใหญ่';
  private b2 ='พระร่วงหลังรางปืน';

  private praPong =[];
  private c1 ='พระสมเด็จวัดบางขุนพรหม พิมพ์สังฆาฏิไม่มีหู';
  private c2 ='พระสมเด็จวัดบางขุนพรหม-พิมพ์ฐานแซม';
  private c3 ='พระสมเด็จวัดบางขุนพรหม-พิมพ์ทรงเจดีย์';
  private c4 ='พระสมเด็จวัดบางขุนพรหม-พิมพเส้นด้ายธรรมดา';
  private c5 ='พระสมเด็จวัดบางขุนพรหม-พิมพ์ใหญ่';

  constructor(public navCtrl: NavController,public NaveParams : NavParams) {}
  
  
  
  gotoPradin(praDin){
    this.navCtrl.push(PradinPage,{
      praDin : praDin
    })
  }

  ionViewDidLoad(){
    this.praDin.push({id:1,name: this.a1});
    this.praDin.push({id:2,name: this.a2});
    this.praDin.push({id:3,name: this.a3});
    this.praDin.push({id:4,name: this.a4});
    this.praDin.push({id:5,name: this.a5});
  }
  

  
}
