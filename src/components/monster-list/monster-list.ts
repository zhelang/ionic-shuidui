import { Component, ViewChild, ViewChildren, ElementRef, QueryList, HostListener } from '@angular/core';
import { NavController, NavParams, AlertController, App, Events, Content } from 'ionic-angular';
import { monstersArr } from './monstersArr';
/*
  Generated class for the MonsterList component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'monster-list',
  templateUrl: 'monster-list.html'
})
export class MonsterList {
  columns: number[] = [];
  rows: number[] = [];
  color: number[][] = [];
  backColor: string = "yellow";
  private rig: number = 0;

  @ViewChild(Content)
  content: Content;

  @ViewChildren('block')
  blockArr: QueryList<ElementRef>;

  constructor(public alertCtrl: AlertController, public app: App, public events: Events) {
    for(let i = 0; i < 3; i++) {
      this.columns.push(i);
      this.rows.push(i);
      this.color.push([]);
      for(let k = 0; k < 3; k++) {
        this.color[i][k] = 0;
      }
    }
  }

  ngAfterViewInit() {
  }

  pageScroll() {
    console.log("scroll");
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "the stock",
      subTitle: "it's fucking falling",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        },
        {
          text: 'Sell',
          handler: () => {
            for(let i = 0; i < 9; i++) {
              console.log('Sell clicked');
              let blockArr = this.blockArr.toArray();
              // let item = Math.floor(Math.random() * blockArr.length);
              blockArr[this.rig].nativeElement.style.background = 'red';
              //要注意index的值不能超过范围，所以要有一个判断语句
              if(this.rig < blockArr.length - 1) {
                this.rig++;
              }
            }
          }
        }
      ]
    });
    alert.present();
  }

  changeColor(target, column, row) {
    let colorArr = ['green', 'yellow'];
    let num = this.color[column][row] % 2;
    target.style.background = colorArr[num];
    this.color[column][row] = this.color[column][row] + 1;
  }
}
