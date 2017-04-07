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
/*
  Generated class for the Hunting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HuntingPage = (function () {
    function HuntingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HuntingPage.prototype.hunting = function () {
        var num = Math.random();
        if (num < 0.5) {
            this.message = "got you";
        }
    };
    HuntingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HuntingPage');
    };
    return HuntingPage;
}());
HuntingPage = __decorate([
    Component({
        selector: 'page-hunting',
        templateUrl: 'hunting.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], HuntingPage);
export { HuntingPage };
//# sourceMappingURL=hunting.js.map