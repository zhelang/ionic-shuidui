import { Component, ViewChild } from '@angular/core';
import { trigger, animate, state, style, transition, keyframes } from '@angular/animations';
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
  monstersArr: Monster[] = [];
  result: string = '發射小球';
  catchBtn: string = 'block';
  againBtn: string = 'none';

  constructor(private getMonster: GetMonsterService) {
  }

  ngAfterViewInit() {
    this.detect();
    // let inId = setInterval(() => {
    //   this.left = (this.left + 20) % 360;
    //   if(this.isStopped) {
    //     clearInterval(inId);
    //     setTimeout(() => {
    //       if(Math.abs(this.left - window.innerWidth / 2) < 50) {
    //         console.log('win');
    //         let x = Math.floor(Math.random() * 5);
    //         console.log(x);
    //         this.monstersArr.push(this.getMonster.send(x));
    //         let idArr = JSON.parse(localStorage.getItem('idArr'));
    //         if(idArr == null) {
    //           idArr = [];
    //         }
    //         idArr.push(x);
    //         localStorage.setItem('idArr', JSON.stringify(idArr));
    //       }
    //       else {
    //         console.log('lose');
    //       }
    //     }, 800);
    //   }
    // }, 1000/30);
  }

  ani() {
    this.state = this.state == 'active'?'inactive':'active';
  }

  detect() {
    let inId = setInterval(() => {
          this.left = (this.left + 20) % 360;
          if(this.isStopped) {
            clearInterval(inId);
            setTimeout(() => {
              if(Math.abs(this.left - window.innerWidth / 2) < 50) {
                console.log('win');
                let x = Math.floor(Math.random() * 5);
                console.log(x);
                this.monstersArr.push(this.getMonster.send(x));
                let idArr = JSON.parse(localStorage.getItem('idArr'));
                if(idArr == null) {
                  idArr = [];
                }
                idArr.push(x);
                localStorage.setItem('idArr', JSON.stringify(idArr));
              }
              else {
                console.log('lose');
              }
            }, 800);
          }
        }, 1000/30);
  }

  catch() {
    this.isStopped = !this.isStopped;
    this.moveState = 'move';
    // let x = Math.floor(Math.random() * 5);
    // console.log(x);
    // this.monstersArr.push(this.getMonster.send(x));
    // let idArr = JSON.parse(localStorage.getItem('idArr'));
    // if(idArr == null) {
    //   idArr = [];
    // }
    // idArr.push(x);
    // localStorage.setItem('idArr', JSON.stringify(idArr));
    this.againBtn = 'block';
    this.catchBtn = 'none';
  }

  playAgain() {
    this.isStopped = false;
    this.moveState = 'stop';
    this.againBtn = 'none';
    this.catchBtn = 'block';
    this.detect();
    // let inId = setInterval(() => {
    //   this.left = (this.left + 20) % 360;
    //   if(this.isStopped) {
    //     clearInterval(inId);
    //     if(Math.abs(this.left - window.innerWidth / 2) < 50) {
    //       setTimeout(() => {
    //         // this.result = '抓到咯！！';
    //         console.log('win');
    //       }, 800);
    //     }
    //     else {
    //       setTimeout(() => {
    //         // this.result = '跑掉啦！！';
    //         console.log('lose');
    //       }, 800);
    //     }
    //   }
    // }, 1000/30);
  }
}
