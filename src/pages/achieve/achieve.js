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
import { GetMonsterService } from '../../providers/get-monster.service';
import _ from 'lodash';
/*
  Generated class for the Achieve page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var AchievePage = (function () {
    function AchievePage(navCtrl, navParams, getMonsters) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getMonsters = getMonsters;
        this.idArr = [];
        this.monstersCatched = [];
        this.resetArr = false;
        this.idArr = JSON.parse(localStorage.getItem('idArr'));
        console.log(this.idArr);
        // this.cage();
        console.log(this.monstersCatched);
    }
    AchievePage.prototype.ngDoCheck = function () {
        if (!_.isEqual(this.idArr, JSON.parse(localStorage.getItem('idArr')))) {
            this.idArr = JSON.parse(localStorage.getItem('idArr'));
            // this.cage();
            console.log("change has been detected");
        }
        // if(this.resetArr) {
        //   localStorage.setItem('idArr', JSON.stringify([]));
        //   this.idArr = JSON.parse(localStorage.getItem('idArr'));
        //   // this.cage();
        //   this.resetArr = false;
        //   console.log("reset arr");
        // }
    };
    AchievePage.prototype.cage = function () {
        if (this.idArr !== null) {
            var len = this.idArr.length;
            for (var i = 0; i < len; i++) {
                this.monstersCatched.push(this.getMonsters.send(this.idArr[i]));
            }
        }
    };
    AchievePage.prototype.reset = function () {
        this.resetArr = true;
        localStorage.setItem('idArr', JSON.stringify([]));
        this.idArr = JSON.parse(localStorage.getItem('idArr'));
    };
    AchievePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AchievePage');
    };
    return AchievePage;
}());
AchievePage = __decorate([
    Component({
        selector: 'page-achieve',
        templateUrl: 'achieve.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams, GetMonsterService])
], AchievePage);
export { AchievePage };
//# sourceMappingURL=achieve.js.map