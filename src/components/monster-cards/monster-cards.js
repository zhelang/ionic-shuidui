var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import _ from 'lodash';
import { GetMonsterService } from '../../providers/get-monster.service';
/*
  Generated class for the MonsterCards component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
var MonsterCardsComponent = (function () {
    function MonsterCardsComponent(getMonsters, navCtrl) {
        this.getMonsters = getMonsters;
        this.navCtrl = navCtrl;
        this.monstersCatched = [];
    }
    MonsterCardsComponent.prototype.ngAfterViewInit = function () {
        this.cage();
    };
    MonsterCardsComponent.prototype.ngOnChanges = function () {
        this.cage();
    };
    MonsterCardsComponent.prototype.cage = function () {
        if (this.cardIdArr !== null) {
            var len = this.cardIdArr.length;
            for (var i = 0; i < len; i++) {
                this.monstersCatched[i] = this.getMonsters.send(this.cardIdArr[i]);
            }
        }
        if (_.isEqual(this.cardIdArr, [])) {
            this.monstersCatched = [];
        }
    };
    return MonsterCardsComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Array)
], MonsterCardsComponent.prototype, "cardIdArr", void 0);
MonsterCardsComponent = __decorate([
    Component({
        selector: 'monster-cards',
        templateUrl: 'monster-cards.html'
    }),
    __metadata("design:paramtypes", [GetMonsterService, NavController])
], MonsterCardsComponent);
export { MonsterCardsComponent };
//# sourceMappingURL=monster-cards.js.map