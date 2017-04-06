import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditService } from '../../providers/reddit.service';

/*
  Generated class for the Reddit page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reddit',
  templateUrl: 'reddit.html',
  providers: [RedditService]
})
export class RedditPage {
  items: any;
  category: any = 'funny';
  limit: any = 5;

  constructor(public navCtrl: NavController, public navParams: NavParams,
   private redditService: RedditService) {}

  ngOnInit() {
    this.reGetPosts(this.category, this.limit);
  }

  reGetPosts(category, limit) {    
    this.redditService.getPosts(category, limit).subscribe((res) => {
      this.items = res.children;
      console.log(this.items);
    });
  }

  changeCategory() {
    this.reGetPosts(this.category, this.limit);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedditPage');
  }

}
