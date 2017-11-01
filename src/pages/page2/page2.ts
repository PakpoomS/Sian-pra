import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { PradinPage } from'../pagespra/pradin/pradin';
import { PrachinPage} from'../pagespra2/prachin/prachin';
import { PrapongPage } from'../pagespra3/prapong/prapong';
import { PralohaPage } from'../pagespra4/praloha/praloha';
import { PrawanPage } from'../pagespra5/prawan/prawan';
import { PraetcPage } from '../pagespra6/praetc/praetc';


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

  private praLoha=[];
  private d1 ='พระ หลวงปู่ทวด หลังเตารีด ( พิมพ์ใหญ่ ปั๊มซ้ำ )';
  private d2 ='พระ หลวงปู่ทวด หลังเตารีด ปี 05 ( พิมพ์เล็ก หน้าเชิด)';
  private d3 ='พระหลวงปู่ทวด หลังเตารีดรีด ปี 05 ( พิมพ์เล็ก หน้าอาปาเช่)';
  private d4 ='พระหลวงปู่ทวด หลังหนังสือ ปี 2505 พิมพ์เล็ก มีตัว ท.ทหาร';
  private d5 ='พระหลวงปู่ทวด หลังหนังสือ ปี 2505 พิมพ์ใหญ่ มีตัว ท';

  private praWan=[];
  private e1 ='พระหลวงปู่ทวด วัดช้างไห้ เนื้อว่าน พิมพ์กรรมการ พ.ศ.2497';
  private e2 ='พระหลวงพ่อทวด วัดช้างให้ เนื้อว่าน พิมพ์กลางชะลูด';
  private e3 ='พระหลวงพ่อทวด วัดช้างให้ เนื้อว่าน พิมพ์กลางมีลูกนัยน์ตา';
  private e4 ='พระหลวงพ่อทวด วัดช้างให้ เนื้อว่าน พิมพ์กลางลึก';
  private e5 ='พระหลวงพ่อทวด วัดช้างให้ เนื้อว่าน พิมพ์กลางลึกหน้าโหนก';

  private praEtc=[];
  private f1 ='เนื้อเมฆพัตร';
  private f2 ='พระซุ้มกอ พิมพ์ใหญ่มีลายกนก';

  constructor(public navCtrl: NavController,public NaveParams : NavParams) {}
  
  
  
  gotoPradin(praDin){
    this.navCtrl.push(PradinPage,{
      praDin : praDin
    })
  }
  gotoPrachin(praChin){
    this.navCtrl.push(PrachinPage,{
      praChin : praChin
    })
  }
  gotoPrapong(praPong){
    this.navCtrl.push(PrapongPage,{
      praPong : praPong
    })
  }
  gotoPraloha(praLoha){
    this.navCtrl.push(PralohaPage,{
      praLoha : praLoha
    })
  }
  gotoPrawan(praWan){
    this.navCtrl.push(PrawanPage,{
      praWan : praWan
    })
  }
  gotoPraetc(praEtc){
    this.navCtrl.push(PraetcPage,{
      praEtc : praEtc
    })
  }


  ionViewDidLoad(){
    this.praDin.push({id:1,name: this.a1});
    this.praDin.push({id:2,name: this.a2});
    this.praDin.push({id:3,name: this.a3});
    this.praDin.push({id:4,name: this.a4});
    this.praDin.push({id:5,name: this.a5});

    this.praChin.push({id:1,name: this.b1});
    this.praChin.push({id:2,name: this.b2});

    this.praPong.push({id:1,name: this.c1});
    this.praPong.push({id:2,name: this.c2});
    this.praPong.push({id:3,name: this.c3});
    this.praPong.push({id:4,name: this.c4});
    this.praPong.push({id:5,name: this.c5});

    this.praLoha.push({id:1,name: this.d1});
    this.praLoha.push({id:2,name: this.d2});
    this.praLoha.push({id:3,name: this.d3});
    this.praLoha.push({id:4,name: this.d4});
    this.praLoha.push({id:5,name: this.d5});

    this.praWan.push({id:1,name: this.e1});
    this.praWan.push({id:2,name: this.e2});
    this.praWan.push({id:3,name: this.e3});
    this.praWan.push({id:4,name: this.e4});
    this.praWan.push({id:5,name: this.e5});
    
    this.praEtc.push({id:1,name: this.f1});
    this.praEtc.push({id:2,name: this.f2});

  }
  

  
}
