import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  posts: Observable<any[]>;
  calendary: Observable<any[]>;
  calSize: number = 0;
  postTags: any = [];
  tags: Observable<any[]>;
  goals: Observable<any[]>;
  times: Observable<any[]>;
  doneGoals: Observable<any[]>;
  information: Observable<any[]>;
  currentPostViewed: number = 0;

  constructor(private http: HttpClient) { }

  getPosts(){
   this.posts =  this.http.get<any[]>('http://localhost/wordpress/wp-json/wp/v2/posts?_embed', {
    params: {
      per_page: '5'
    }
  });
}

getCalendary(){
  this.calendary =  this.http.get<any[]>('http://localhost/wordpress/wp-json/wp/v2/posts?_embed', {
   params: {
     per_page: '30'
   }
 });
}

  getTags(){

    this.tags = this.http.get<any[]>('http://localhost/phpword/getTags.php');

  }

  getCertainTags(postId: Number){
   // this.tags = this.http.get<any[]>('http://localhost/phpword/getTags.php?postId='+postId);
  }

  getGoals(){
    this.goals = this.http.get<any[]>('http://localhost/phpword/getGoals.php');
  }

  getDoneGoals(){
    this.doneGoals = this.http.get<any[]>('http://localhost/phpword/getDoneGoals.php');
  }

  getInfo(){
    this.information = this.http.get<any[]>('http://localhost/phpword/getInfo.php');
  }

  getTimes(){
    this.times = this.http.get<any[]>('http://localhost/phpword/getTimes.php');
  }

}
