import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Monster } from '../../components/monster-list/monster';
import { GetMonsterService } from '../../providers/get-monster.service';
/*
  Generated class for the Hunting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hunting',
  templateUrl: 'hunting.html'
})
export class HuntingPage {
  monsterId: number;
  monster: Monster;
  constructor(public navCtrl: NavController, public navParams: NavParams, private getMonster: GetMonsterService) {}

  hunting(x: number) {
    this.monsterId = x;
    this.monster = this.getMonster.send(x);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HuntingPage');
  }

}
