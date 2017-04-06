import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController, Loading } from 'ionic-angular';
import { TwitterConnect } from 'ionic-native';
import { TwitterUtils } from '../../providers/twitter-utils';
import { HomePage } from '../home/home';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public twitterUtils: TwitterUtils, private alertCtrl: AlertController, 
  private loadingCtrl: LoadingController) {}

  loginWithTwitter() {
    this.showLoading();
    TwitterConnect.login().then((data) => {
      this.onSuccess(data);
    }, (error) => {
      this.onError(error);
    });
  }

  onSuccess(response) {
    console.log("success", response);
    setTimeout(() => {
      this.loading.dismiss();
      this.navCtrl.setRoot(HomePage);
    });
    this.twitterUtils.configureUtils('q8HBg9ef5vrax1kyBqis9jWcv', 'NTrSe16Hn3XEghnJygXwGK9P9c92YPqnmiaDed8QEyQGVWtV0v',
    response.token, response.secret);
  }

  onError(response) {
    this.showError(response);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'please wait',
    });
    this.loading.present();
  }

  showError(text) {
    setTimeout(() => {
      this.loading.dismiss();
    });
    let alert = this.alertCtrl.create({
      title: 'fail',
      message: text + '\nMake sure to setup Twitter account on your device.',
      buttons: ['ok'],
    })
    alert.present(prompt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
