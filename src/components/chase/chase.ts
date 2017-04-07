import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { trigger, animate, state, style, transition, keyframes } from '@angular/animations';
import { Monster } from '../monster-list/monster';
import { GetMonsterService } from '../../providers/get-monster.service';

import _ from 'lodash';
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
  @Output()
  catchedId: EventEmitter<number> = new EventEmitter<number>();

  constructor(private getMonster: GetMonsterService) {
  }

  ngAfterViewInit() {
    this.detect();
  }

  ani() {
    this.state = this.state == 'active'?'inactive':'active';
  }

  detect() {
    let inId = setInterval(() => {
          this.left = (this.left + 20) % 360;
          let x, idArr;
          if(this.isStopped) {
            setTimeout(() => {
              if(Math.abs(this.left - window.innerWidth / 2) < 500) {
                console.log('win');
                x = Math.floor(Math.random() * 5);
                console.log(x);
                this.catchedId.emit(x);
                idArr = JSON.parse(localStorage.getItem('idArr'));
                if(idArr == null || _.isEqual(idArr, [])) {
                  idArr = [];
                  idArr.push(x);
                  this.monstersArr.push(this.getMonster.send(x));
                  console.log(idArr);
                  localStorage.setItem('idArr', JSON.stringify(idArr));
                  return;
                }
                for(let i = 0; i < idArr.length; i++) {
                  if(x == idArr[i]) {
                    console.log("break");
                    return;
                  }
                }
                idArr.push(x);
                console.log(idArr);
                this.monstersArr.push(this.getMonster.send(x));
                localStorage.setItem('idArr', JSON.stringify(idArr));
              }
              else {
                console.log('lose');
              }
            }, 800);
            clearInterval(inId);
          }
        }, 1000/30);
  }

  catch() {
    this.isStopped = true;
    this.moveState = 'move';
    this.againBtn = 'block';
    this.catchBtn = 'none';
  }

  playAgain() {
    this.isStopped = false;
    this.moveState = 'stop';
    this.againBtn = 'none';
    this.catchBtn = 'block';
    this.detect();
  }
}
