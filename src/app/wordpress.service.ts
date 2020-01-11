import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  posts: Observable<any[]>;
  goals: Observable<any[]>;
  doneGoals: Observable<any[]>;
  times: Observable<any[]>;
  tags: Observable<any[]>;

  constructor( private http: HttpClient) { }
 
  getGoals(){
    this.goals = this.http.get<any[]>("http://localhost/phpword/getGoals.php");
  }
  getDoneGoals(){
    this.doneGoals = this.http.get<any[]>("http://localhost/phpword/getDoneGoals.php");
  }
  postGoalChange(title: string, newTitle: string, newAdditions: string){
    this.http.post("http://localhost/phpword/postGoalChange.php",{'oldTitle':title,'title':newTitle,'addition':newAdditions})
    .subscribe((response: Response) => {} );
  }
  getTimes(){
    this.times = this.http.get<any[]>('http://localhost/phpword/getTimes.php');
  }
  getPosts(){
    this.posts =  this.http.get<any[]>('http://localhost/wordpress/wp-json/wp/v2/posts?_embed', {
     params: {
       per_page: '30'
     }
   });
  }
  getTags(){

    this.tags = this.http.get<any[]>('http://localhost/phpword/getTags.php');

  }
  editTags(id,dystans,wysilek,czas,typ){
    this.http.post("http://localhost/phpword/editTags.php",{'id':id,'dystans':dystans,'wysilek':wysilek,'czas':czas,'typ':typ})
    .subscribe((response: Response) => {} );
  }
  postTags(id,dystans,wysilek,czas,typ){
    this.http.post("http://localhost/phpword/postTags.php",{'id':id,'dystans':dystans,'wysilek':wysilek,'czas':czas,'typ':typ})
    .subscribe((response: Response) => {} );
  }
  sendTime(id,time,dist){

    dist==0?dist=10:dist==1?dist=5:dist==2?dist=1.5:dist==3?dist=0.5:dist=null;

    this.http.post("http://localhost/phpword/postNewTime.php",{'postId':id,'dystans':dist,'time':time})
    .subscribe((response: Response) => {location.reload();} );;
    
  }
}
