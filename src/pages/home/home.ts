import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, ToastController } from 'ionic-angular';
import { TwitterUtils } from '../../providers/twitter-utils';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: Loading;
  tweets = [];
  constructor(public navCtrl: NavController, public twitterUtils: TwitterUtils, 
  private alertCtrl: AlertController, private loadingCtrl: LoadingController, 
  private toastCtrl: ToastController) {}
  
  ionViewWillEnter() {
    this.loadTimeline();
  }

 public loadTimeline(refresher?) {
    this.showLoading();
    let url = 'https://api.twitter.com/1.1/statuses/home_timeline.json';
    let params = {count: 10};


    this.twitterUtils.performGetRequest(url, params).subscribe((data) => {
      this.tweets = data;
      this.loading.dismiss();
      refresher.complete();
    }, error => {
      refresher.complete();
      this.showError(error);
    });
  }


  public composeTweet() {
    let prompt = this.alertCtrl.create({
      title: 'New Tweet',
      message: "Write your Tweet message below",
      inputs: [
        {
          name: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Tweet',
          handler: data => {
            console.log('Saved clicked: ', data.text);
            this.postTweet(data.text);
          }
        }
      ]
    });
    prompt.present();
  }


  public dateForTweet(dateString) {
    console.log("my string: ", dateString);
    let d = new Date(Date.parse(dateString));


    // http://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date
    var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);


    return datestring;
  }


  public openLinkUrl(url) {
    let browser = new InAppBrowser(url, 'blank');
    browser.show();
  }


  public postTweet(text) {
    this.showLoading();
    let urlPost = 'https://api.twitter.com/1.1/statuses/update.json';
    this.twitterUtils.performPostRequest(urlPost, {status: text}).subscribe((data) => {
      this.loading.dismiss();
      let toast = this.toastCtrl.create({
        message: 'Tweet posted!',
        duration: 3000
      });
      toast.present();
    }, error => {
      this.showError(error);
    })
  }


  private showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }


  private showError(text) {
    this.loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Error',
      message: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
