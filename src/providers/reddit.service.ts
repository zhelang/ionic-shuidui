import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Undefined provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RedditService {
  baseUrl: String = "https://www.reddit.com/r";

  constructor(public http: Http) {
  }

  getPosts(category: String, limit: number) {
    // return this.http.get(this.baseUrl + '/' + category + '/top.json?limit=' + limit)
    //   .map((res) => {res.json()});
    let qq = this.http.get(this.baseUrl + '/' + category + '/top.json?limit=' + limit)
        .map(res => {return res.json().data});
    return qq;
  }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   return body.data || { };
  // }

}
