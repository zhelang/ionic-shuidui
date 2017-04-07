import { Component, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import _ from 'lodash';

import { AchievePage } from '../../pages/achieve/achieve';

import { Monster } from '../monster-list/monster';

import { GetMonsterService } from '../../providers/get-monster.service';
/*
  Generated class for the MonsterCards component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'monster-cards',
  templateUrl: 'monster-cards.html'
})
export class MonsterCardsComponent {
  @Input()
  cardIdArr: number[];
  monstersCatched: Monster[] = [];
  constructor(private getMonsters: GetMonsterService, public navCtrl: NavController) {
  }

  ngAfterViewInit() {
    this.cage();
  }

  ngOnChanges() {
    this.cage();
  }

  cage() {
    if(this.cardIdArr !== null) {
      let len = this.cardIdArr.length;
      for(let i = 0; i < len; i++) {
        this.monstersCatched[i] = this.getMonsters.send(this.cardIdArr[i]);
      }
    }
    if(_.isEqual(this.cardIdArr, [])) {
      this.monstersCatched = [];
    }
  }
}
