import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { AchievePage } from '../pages/achieve/achieve';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LogoPage } from '../pages/logo/logo';
import { MonsterBabyPage } from '../pages/monster-baby/monster-baby';
import { HuntingPage } from '../pages/hunting/hunting';
import { DetailsPage } from '../pages/details/details';

//components
import { MonsterList } from '../components/monster-list/monster-list';
import { ChaseComponent } from '../components/chase/chase';

//providers
import { TwitterUtils } from '../providers/twitter-utils';
import { GetMonsterService } from '../providers/get-monster.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AchievePage,
    HomePage,
    TabsPage,
    LogoPage,
    MonsterBabyPage,
    MonsterList,
    HuntingPage,
    ChaseComponent,
    DetailsPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AchievePage,
    HomePage,
    TabsPage,
    LogoPage,
    MonsterBabyPage,
    HuntingPage,
    DetailsPage,
  ],
  providers: [TwitterUtils, File, GetMonsterService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
