import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Monster } from '../../components/monster-list/monster';

import { GetMonsterService } from '../../providers/get-monster.service';
/*
  Generated class for the Achieve page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-achieve',
  templateUrl: 'achieve.html'
})
export class AchievePage {
  idArr: number[] = [];
  monstersCatched: Monster[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private getMonsters: GetMonsterService) {
    // localStorage.setItem('idArr', JSON.stringify(this.idArr));
    this.idArr = JSON.parse(localStorage.getItem('idArr'));
    console.log(this.idArr);
    // this.monstersCatched.push(this.getMonsters.send(3));
    this.cage();
    console.log(this.monstersCatched);    
  }

  cage() {
    if(this.idArr !== null) {
      let len = this.idArr.length;
      for(let i = 0; i < len; i++) {
        this.monstersCatched.push(this.getMonsters.send(this.idArr[i]));
      }
    }
  }

  reset() {
    localStorage.setItem('idArr', JSON.stringify([]));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchievePage');
  }

}
