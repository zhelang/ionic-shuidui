var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { monstersArr } from '../components/monster-list/monstersArr';
/*
  Generated class for the GetMonster provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var GetMonsterService = (function () {
    function GetMonsterService(http) {
        this.http = http;
        console.log('Hello GetMonster Provider');
    }
    GetMonsterService.prototype.send = function (x) {
        return monstersArr[x];
    };
    GetMonsterService.prototype.pushMonstersArr = function () {
        return monstersArr;
    };
    return GetMonsterService;
}());
GetMonsterService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], GetMonsterService);
export { GetMonsterService };
//# sourceMappingURL=get-monster.service.js.map