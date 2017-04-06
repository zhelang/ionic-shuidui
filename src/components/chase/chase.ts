import { Component, ViewChild } from '@angular/core';
import { trigger, animate, state, style, transition, keyframes } from '@angular/animations';
import { File } from '@ionic-native/file';
import { Monster } from '../monster-list/monster';
import { GetMonsterService } from '../../providers/get-monster.service';
/*
  Generated class for the Chase component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'chase',
  templateUrl: 'chase.html',
  animations: [
      trigger('heroState', [
        state('inactive', style({
          backgroundColor: '#8AB404',
          transform: 'scale(1)'
        })),
        state('active', style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.1)'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('void => inactive', animate('2100ms ease-out')),
        transition('active => inactive', animate('2100ms ease-out'))
      ]),
      trigger('moveForward', [
        state('stop', style({
          backgroundColor: '#000',
        })),
        state('move', style({
          top: '0px',
          backgroundColor: '#cfd8dc',
        })),
        transition('void => stop', animate('1000ms ease-in')),
        transition('stop => move', [
          animate('800ms', keyframes([
            style({opacity: 0, transform: `translate3D(${Math.random() * 80}px, 0, 0)`, offset: 0}),
            style({opacity: 1, transform: `translate3D(${Math.random() * 80}px, ${-window.innerHeight / 4}px, 0)`, offset: 0.3}),
            style({opacity: 1, transform: `translate3D(${Math.random() * 80}px, ${-window.innerHeight / 3}px, 0)`, offset: 0.5}),
            style({opacity: 1, transform: `translate3D(${Math.random() * 80}px, ${-window.innerHeight / 2}px, 0)`, offset: 0.7}),
            style({opacity: 1, transform: 'translate3D(0, 0, 0)', top: '0px', offset: 1.0}),
          ])),
        ])
      ]),
      trigger('parentMove', [
        state('move', style({
          backgroundColor: 'blue',
        }))
      ])
  ],
})
// `-${window.innerHeight}`
export class ChaseComponent {
  state: string = 'inactive';
  moveState: string = 'stop';
  left: number = 5;
  isStopped: boolean = false;
  text: string;
  monstersArr: Monster[] = [];
  result: string = '發射小球';

  constructor(private getMonster: GetMonsterService, private file: File) {
    console.log('Hello Chase Component');
    console.log(this.file.dataDirectory);
    this.text = 'Hello World';
    this.file.checkDir(this.file.dataDirectory, 'goals')
      .then(_ => console.log('Directory exists'))
      .catch(err => console.log('Directory doesnt exist'));
    this.file.createDir(this.file.dataDirectory, 'tryme', false)
      .then(() => console.log('create'))
      .catch(() => console.log('err create'));
  }

  ngAfterViewInit() {
    let inId = setInterval(() => {
      this.left = (this.left + 20) % 360;
      if(this.isStopped) {
        clearInterval(inId);
        if(Math.abs(this.left - window.innerWidth / 2) < 50) {
          setTimeout(() => {
            this.result = '抓到咯！！';
            console.log('win');
          }, 800);
        }
        else {
          setTimeout(() => {
            this.result = '跑掉啦！！';
            console.log('lose');
          }, 800);
        }
      }
    }, 1000/30);
  }

  tap() {
    let x = Math.floor(Math.random() * this.monstersArr.length);
    this.monstersArr.push(this.getMonster.send(x));
    console.log(this.monstersArr);
  }

  ani() {
    this.state = this.state == 'active'?'inactive':'active';
  }

  catch() {
    this.isStopped = !this.isStopped;
    this.moveState = 'move';
  }
}
