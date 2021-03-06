import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
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
import { MonsterCardsComponent } from '../components/monster-cards/monster-cards';

//providers
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
    MonsterCardsComponent
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
  providers: [GetMonsterService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
