var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { MonsterCardsComponent } from '../components/monster-cards/monster-cards';
//providers
import { TwitterUtils } from '../providers/twitter-utils';
import { GetMonsterService } from '../providers/get-monster.service';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
        providers: [TwitterUtils, File, GetMonsterService, { provide: ErrorHandler, useClass: IonicErrorHandler }]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map