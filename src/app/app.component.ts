import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { LogoPage } from '../pages/logo/logo';
import { RedditPage } from '../pages/reddit/reddit';

import { RedditService } from '../providers/reddit.service';

@Component({
  templateUrl: 'app.html',
  providers: [RedditService]
})
export class MyApp {
  // rootPage = LogoPage;
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
