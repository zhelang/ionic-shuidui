import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Setting page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html'
})
export class SettingPage {
  category: string = "funny";
  limit: any = 10;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  setDefaults() {
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
