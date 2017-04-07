import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Monster } from '../../components/monster-list/monster';

import { GetMonsterService } from '../../providers/get-monster.service';

import _ from 'lodash';
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
  resetArr: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private getMonsters: GetMonsterService) {
    this.idArr = JSON.parse(localStorage.getItem('idArr'));
    console.log(this.idArr);
    // this.cage();
    console.log(this.monstersCatched);    
  }

  ngDoCheck() {
    if(!_.isEqual( this.idArr, JSON.parse(localStorage.getItem('idArr')))) {
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
    this.resetArr = true;
    localStorage.setItem('idArr', JSON.stringify([]));
    this.idArr = JSON.parse(localStorage.getItem('idArr'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchievePage');
  }

}
