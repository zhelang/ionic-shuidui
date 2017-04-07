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
import { MonsterBabyPage } from '../monster-baby/monster-baby';
/*
  Generated class for the Logo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LogoPage = (function () {
    function LogoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogoPage');
    };
    LogoPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push(MonsterBabyPage);
        }, 1500);
    };
    return LogoPage;
}());
LogoPage = __decorate([
    Component({
        selector: 'page-logo',
        templateUrl: 'logo.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], LogoPage);
export { LogoPage };
//# sourceMappingURL=logo.js.map