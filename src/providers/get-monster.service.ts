import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { monstersArr } from '../components/monster-list/monstersArr';

/*
  Generated class for the GetMonster provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GetMonsterService {

  constructor(public http: Http) {
    console.log('Hello GetMonster Provider');
  }

  send(x: number) {
    return monstersArr[x];
  }

  pushMonstersArr() {
    return monstersArr;
  }
}
