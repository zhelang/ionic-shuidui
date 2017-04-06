import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Monster } from '../../components/monster-list/monster';
import { DetailsPage } from '../details/details';
import { GetMonsterService } from '../../providers/get-monster.service';

/*
  Generated class for the MonsterBaby page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-monster-baby',
  templateUrl: 'monster-baby.html'
})
export class MonsterBabyPage {
  monstersArr: Monster[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private getMonster: GetMonsterService) {
    this.monstersArr = this.getMonster.pushMonstersArr();
  }

  seeDetail(item) {
    this.navCtrl.push(DetailsPage, {
      item: item,
    })
  }

  changeCategory() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonsterBabyPage');
  }

}
