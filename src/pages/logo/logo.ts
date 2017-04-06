import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MonsterBabyPage } from '../monster-baby/monster-baby';

/*
  Generated class for the Logo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-logo',
  templateUrl: 'logo.html'
})
export class LogoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoPage');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.navCtrl.push(MonsterBabyPage);
    },1500);
  }

}
