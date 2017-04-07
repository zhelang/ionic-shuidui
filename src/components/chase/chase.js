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
import { trigger, animate, state, style, transition, keyframes } from '@angular/animations';
import { File } from '@ionic-native/file';
import { GetMonsterService } from '../../providers/get-monster.service';
/*
  Generated class for the Chase component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var ChaseComponent = (function () {
    function ChaseComponent(getMonster, file) {
        this.getMonster = getMonster;
        this.file = file;
        this.state = 'inactive';
        this.moveState = 'stop';
        this.left = 5;
        this.isStopped = false;
        this.monstersArr = [];
        this.result = '發射小球';
        this.catchBtn = 'block';
        this.againBtn = 'none';
        this.text = 'Hello World';
        // if(JSON.parse(localStorage.getItem('idArr')).length == null) {
        //   let idArr = [];
        //   localStorage.setItem('idArr', JSON.stringify(idArr));      
        // }
    }
    ChaseComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var inId = setInterval(function () {
            _this.left = (_this.left + 20) % 360;
            if (_this.isStopped) {
                clearInterval(inId);
                if (Math.abs(_this.left - window.innerWidth / 2) < 50) {
                    setTimeout(function () {
                        // this.result = '抓到咯！！';
                        console.log('win');
                    }, 800);
                }
                else {
                    setTimeout(function () {
                        // this.result = '跑掉啦！！';
                        console.log('lose');
                    }, 800);
                }
            }
        }, 1000 / 30);
    };
    ChaseComponent.prototype.tap = function () {
        var x = Math.floor(Math.random() * this.monstersArr.length);
        this.monstersArr.push(this.getMonster.send(x));
        console.log(this.monstersArr);
    };
    ChaseComponent.prototype.ani = function () {
        this.state = this.state == 'active' ? 'inactive' : 'active';
    };
    ChaseComponent.prototype.catch = function () {
        this.isStopped = !this.isStopped;
        this.moveState = 'move';
        var x = Math.floor(Math.random() * 5);
        console.log(x);
        this.monstersArr.push(this.getMonster.send(x));
        var idArr = JSON.parse(localStorage.getItem('idArr'));
        if (idArr == null) {
            idArr = [];
        }
        idArr.push(x);
        localStorage.setItem('idArr', JSON.stringify(idArr));
        this.againBtn = 'block';
        this.catchBtn = 'none';
    };
    ChaseComponent.prototype.playAgain = function () {
        var _this = this;
        this.isStopped = false;
        this.moveState = 'stop';
        this.againBtn = 'none';
        this.catchBtn = 'block';
        var inId = setInterval(function () {
            _this.left = (_this.left + 20) % 360;
            if (_this.isStopped) {
                clearInterval(inId);
                if (Math.abs(_this.left - window.innerWidth / 2) < 50) {
                    setTimeout(function () {
                        // this.result = '抓到咯！！';
                        console.log('win');
                    }, 800);
                }
                else {
                    setTimeout(function () {
                        // this.result = '跑掉啦！！';
                        console.log('lose');
                    }, 800);
                }
            }
        }, 1000 / 30);
    };
    return ChaseComponent;
}());
ChaseComponent = __decorate([
    Component({
        selector: 'chase',
        templateUrl: 'chase.html',
        animations: [
            trigger('moveForward', [
                state('stop', style({
                    backgroundColor: '#000',
                })),
                state('move', style({
                    top: '0px',
                    backgroundColor: '#cfd8dc',
                })),
                transition('void => stop', animate('1000ms ease-in')),
                transition('stop => move', [
                    animate('800ms', keyframes([
                        style({ opacity: 0, transform: "translate3D(" + Math.random() * 80 + "px, 0, 0)", offset: 0 }),
                        style({ opacity: 1, transform: "translate3D(" + Math.random() * 80 + "px, " + -window.innerHeight / 4 + "px, 0)", offset: 0.3 }),
                        style({ opacity: 1, transform: "translate3D(" + Math.random() * 80 + "px, " + -window.innerHeight / 3 + "px, 0)", offset: 0.5 }),
                        style({ opacity: 1, transform: "translate3D(" + Math.random() * 80 + "px, " + -window.innerHeight / 2 + "px, 0)", offset: 0.7 }),
                        style({ opacity: 1, transform: 'translate3D(0, 0, 0)', top: '0px', offset: 1.0 }),
                    ])),
                ])
            ]),
            trigger('parentMove', [
                state('move', style({
                    backgroundColor: 'blue',
                }))
            ])
        ],
    }),
    __metadata("design:paramtypes", [GetMonsterService, File])
], ChaseComponent);
export { ChaseComponent };
//# sourceMappingURL=chase.js.map