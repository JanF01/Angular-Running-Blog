import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {



  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]>{
  return this.http.get<any[]>('http://localhost/wordpress/wp-json/wp/v2/posts?_embed', {
    params: {
      per_page: '6'
    }
  });
  }
}
