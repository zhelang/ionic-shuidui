import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { trigger, animate, state, style, transition, keyframes } from '@angular/animations';

import { Monster } from '../../components/monster-list/monster';
import { GetMonsterService } from '../../providers/get-monster.service';
/*
  Generated class for the Hunting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hunting',
  templateUrl: 'hunting.html',
  animations: [
        trigger('movePic', [
          state('stop', style({
            opacity: 0.0,
          })),
          state('move', style({
            opacity: 0.0,
          })),
          transition('void => stop', animate('1000ms ease-in')),
          transition('stop => move', [
            animate('1000ms', keyframes([
              style({opacity: 1.0, transform: "translateY(0px)", offset: 0}),
              style({opacity: 0.9, transform: "translateY(10px)" , offset: 0.3}),
              style({opacity: 0.8, transform: "translateY(15px)", offset: 0.5}),
              style({opacity: 0.5, transform: "translateY(20px)", offset: 0.7}),
              style({opacity: 0, transform: "translateY(25px)", offset: 1.0}),
            ])),
          ])
        ]),
    ],
})
export class HuntingPage {
  monsterId: number;
  // monster: Monster;
  picComing: string = 'stop';
  otherPic: string = 'imgs/blank.png';
  constructor(public navCtrl: NavController, public navParams: NavParams, private getMonster: GetMonsterService) {}

  hunting(x: number) {
    this.monsterId = x;
    // this.monster = this.getMonster.send(x);
    this.otherPic = this.getMonster.send(x).imgSrc;
    this.picComing = 'move';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HuntingPage');
  }

}
