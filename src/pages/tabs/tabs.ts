import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { AchievePage } from '../achieve/achieve';
import { HuntingPage } from '../hunting/hunting';
import { MonsterBabyPage } from '../monster-baby/monster-baby';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = HuntingPage;
  tab3Root: any = AchievePage;
  tab4Root: any = MonsterBabyPage;

  constructor() {

  }
}
