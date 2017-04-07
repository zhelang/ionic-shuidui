var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { GetMonsterService } from '../../providers/get-monster.service';
/*
  Generated class for the MonsterBaby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var MonsterBabyPage = (function () {
    function MonsterBabyPage(navCtrl, navParams, getMonster) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getMonster = getMonster;
        this.monstersArr = [];
        this.monstersArr = this.getMonster.pushMonstersArr();
    }
    MonsterBabyPage.prototype.seeDetail = function (item) {
        this.navCtrl.push(DetailsPage, {
            item: item,
        });
    };
    MonsterBabyPage.prototype.changeCategory = function () {
    };
    MonsterBabyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MonsterBabyPage');
    };
    return MonsterBabyPage;
}());
MonsterBabyPage = __decorate([
    Component({
        selector: 'page-monster-baby',
        templateUrl: 'monster-baby.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, GetMonsterService])
], MonsterBabyPage);
export { MonsterBabyPage };
//# sourceMappingURL=monster-baby.js.map