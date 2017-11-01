import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import หน้าต่าง ๆ
import { Page1Page } from '../pages/page1/page1';
import { Page2Page } from '../pages/page2/page2';
import { Page3Page } from '../pages/page3/page3';
import { Page4Page } from '../pages/page4/page4';
import { Page5Page } from '../pages/page5/page5';
import { Page6Page } from '../pages/page6/page6';
import { Page7Page } from '../pages/page7/page7';
import { Page8Page } from '../pages/page8/page8';
import { Page9Page } from '../pages/page9/page9';
import { Page10Page } from '../pages/page10/page10';
import { Page11Page } from '../pages/page11/page11';
import { Page12Page} from '../pages/page12/page12';
import { Page13Page } from '../pages/page13/page13';
import { Page14Page} from '../pages/page14/page14';
import { Page15Page } from'../pages/page15/page15';
import { Page16Page } from'../pages/page16/page16';
import { Page17Page } from'../pages/page17/page17';
import { Page18Page } from'../pages/page18/page18';
import { Page19Page } from'../pages/page19/page19';

//ข้อมูลพระต่าง ๆ //ส่วนพระดิน
import { PradinPage } from'../pages/pagespra/pradin/pradin';
import { PradinDataPage } from'../pages/pagespra/pradin-data/pradin-data';
import { PradinData2Page } from'../pages/pagespra/pradin-data2/pradin-data2';
import { PradinData3Page } from'../pages/pagespra/pradin-data3/pradin-data3';
import { PradinData4Page } from'../pages/pagespra/pradin-data4/pradin-data4';
import { PradinData5Page } from'../pages/pagespra/pradin-data5/pradin-data5';


//ข้อมูลพระต่าง ๆ //ส่วนพระชิน
import { PrachinPage } from'../pages/pagespra2/prachin/prachin';
import { PrachinDataPage } from'../pages/pagespra2/prachin-data/prachin-data';
import { PrachinData2Page } from'../pages/pagespra2/prachin-data2/prachin-data2';
import { PrachinData3Page } from'../pages/pagespra2/prachin-data3/prachin-data3';
import { PrachinData4Page } from'../pages/pagespra2/prachin-data4/prachin-data4';
import { PrachinData5Page } from'../pages/pagespra2/prachin-data5/prachin-data5';

//ข้อมูลพระต่าง ๆ //ส่วนพระผง
import { PrapongPage } from'../pages/pagespra3/prapong/prapong';
import { PrapongDataPage } from'../pages/pagespra3/prapong-data/prapong-data';
import { PrapongData2Page } from'../pages/pagespra3/prapong-data2/prapong-data2';
import { PrapongData3Page } from'../pages/pagespra3/prapong-data3/prapong-data3';
import { PrapongData4Page } from'../pages/pagespra3/prapong-data4/prapong-data4';
import { PrapongData5Page } from'../pages/pagespra3/prapong-data5/prapong-data5';

//ข้อมูลพระต่าง ๆ //ส่วนพระโลหะ
import { PralohaPage } from'../pages/pagespra4/praloha/praloha';
import { PralohaDataPage } from'../pages/pagespra4/praloha-data/praloha-data';
import { PralohaData2Page } from'../pages/pagespra4/praloha-data2/praloha-data2';
import { PralohaData3Page } from'../pages/pagespra4/praloha-data3/praloha-data3';
import { PralohaData4Page } from'../pages/pagespra4/praloha-data4/praloha-data4';
import { PralohaData5Page } from'../pages/pagespra4/praloha-data5/praloha-data5';

//ข้อมูลพระต่าง ๆ //ส่วนพระโลหะ
import { PrawanPage} from'../pages/pagespra5/prawan/prawan';
import { PrawanDataPage} from'../pages/pagespra5/prawan-data/prawan-data';
import { PrawanData2Page} from'../pages/pagespra5/prawan-data2/prawan-data2';
import { PrawanData3Page} from'../pages/pagespra5/prawan-data3/prawan-data3';
import { PrawanData4Page} from'../pages/pagespra5/prawan-data4/prawan-data4';
import { PrawanData5Page} from'../pages/pagespra5/prawan-data5/prawan-data5';

//ข้อมูลพระต่าง ๆ //ส่วนพระอื่น 
import { PraetcPage } from'../pages/pagespra6/praetc/praetc';
import { PraetcDataPage } from'../pages/pagespra6/praetc-data/praetc-data';
import { PraetcData2Page } from'../pages/pagespra6/praetc-data2/praetc-data2';









//import โมดูลเครื่อง
import { Camera } from '@ionic-native/camera';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    Page5Page,
    Page6Page,
    Page7Page,
    Page8Page,
    Page9Page,
    Page10Page,
    Page11Page,
    Page12Page,
    Page13Page,
    Page14Page,
    Page15Page,
    Page16Page,
    Page17Page,
    Page18Page,
    Page19Page,
    PradinPage,
    PradinDataPage,
    PradinData2Page,
    PradinData3Page,
    PradinData4Page,
    PradinData5Page,
    PrachinPage,
    PrachinDataPage,
    PrachinData2Page,
    PrachinData3Page,
    PrachinData4Page,
    PrachinData5Page,
    PrapongPage,
    PrapongDataPage,
    PrapongData2Page,
    PrapongData3Page,
    PrapongData4Page,
    PrapongData5Page,
    PralohaPage,
    PralohaDataPage,
    PralohaData2Page,
    PralohaData3Page,
    PralohaData4Page,
    PralohaData5Page,
    PrawanPage,
    PrawanDataPage,
    PrawanData2Page,
    PrawanData3Page,
    PrawanData4Page,
    PrawanData5Page,
    PraetcPage,
    PraetcDataPage,
    PraetcData2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1Page,
    Page2Page,
    Page3Page,
    Page4Page,
    Page5Page,
    Page6Page,
    Page7Page,
    Page8Page,
    Page9Page,
    Page10Page,
    Page11Page,
    Page12Page,
    Page13Page,
    Page14Page,
    Page15Page,
    Page16Page,
    Page17Page,
    Page18Page,
    Page19Page,
    PradinPage,
    PradinDataPage,
    PradinData2Page,
    PradinData3Page,
    PradinData4Page,
    PradinData5Page,
    PrachinPage,
    PrachinDataPage,
    PrachinData2Page,
    PrachinData3Page,
    PrachinData4Page,
    PrachinData5Page,
    PrapongPage,
    PrapongDataPage,
    PrapongData2Page,
    PrapongData3Page,
    PrapongData4Page,
    PrapongData5Page,
    PralohaPage,
    PralohaDataPage,
    PralohaData2Page,
    PralohaData3Page,
    PralohaData4Page,
    PralohaData5Page,
    PrawanPage,
    PrawanDataPage,
    PrawanData2Page,
    PrawanData3Page,
    PrawanData4Page,
    PrawanData5Page,
    PraetcPage,
    PraetcDataPage,
    PraetcData2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}