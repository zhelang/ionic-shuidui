import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
  message: String;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  hunting() {
    let num = Math.random();
    if(num < 0.5) {
      this.message = "got you";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HuntingPage');
  }

}
