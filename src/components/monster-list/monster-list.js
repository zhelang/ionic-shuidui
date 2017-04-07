var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { AlertController, App, Events, Content } from 'ionic-angular';
/*
  Generated class for the MonsterList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var MonsterList = (function () {
    function MonsterList(alertCtrl, app, events) {
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.events = events;
        this.columns = [];
        this.rows = [];
        this.color = [];
        this.backColor = "yellow";
        this.rig = 0;
        for (var i = 0; i < 3; i++) {
            this.columns.push(i);
            this.rows.push(i);
            this.color.push([]);
            for (var k = 0; k < 3; k++) {
                this.color[i][k] = 0;
            }
        }
    }
    MonsterList.prototype.ngAfterViewInit = function () {
    };
    MonsterList.prototype.pageScroll = function () {
        console.log("scroll");
    };
    MonsterList.prototype.presentAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "the stock",
            subTitle: "it's fucking falling",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Buy',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                },
                {
                    text: 'Sell',
                    handler: function () {
                        for (var i = 0; i < 9; i++) {
                            console.log('Sell clicked');
                            var blockArr = _this.blockArr.toArray();
                            // let item = Math.floor(Math.random() * blockArr.length);
                            blockArr[_this.rig].nativeElement.style.background = 'red';
                            //要注意index的值不能超过范围，所以要有一个判断语句
                            if (_this.rig < blockArr.length - 1) {
                                _this.rig++;
                            }
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    MonsterList.prototype.changeColor = function (target, column, row) {
        var colorArr = ['green', 'yellow'];
        var num = this.color[column][row] % 2;
        target.style.background = colorArr[num];
        this.color[column][row] = this.color[column][row] + 1;
    };
    return MonsterList;
}());
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], MonsterList.prototype, "content", void 0);
__decorate([
    ViewChildren('block'),
    __metadata("design:type", QueryList)
], MonsterList.prototype, "blockArr", void 0);
MonsterList = __decorate([
    Component({
        selector: 'monster-list',
        templateUrl: 'monster-list.html'
    }),
    __metadata("design:paramtypes", [AlertController, App, Events])
], MonsterList);
export { MonsterList };
//# sourceMappingURL=monster-list.js.map