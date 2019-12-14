import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {

  posts: Observable<any[]>;
  tags: Observable<any[]>;

  constructor(private http: HttpClient) { }

  getPosts(){
   this.posts =  this.http.get<any[]>('http://localhost/wordpress/wp-json/wp/v2/posts?_embed', {
    params: {
      per_page: '6'
    }
  });
}
  getTags(){
    this.tags = this.http.get<any[]>('http://localhost/wordpress/wp-json/wp/v2/tags');
  }
}
