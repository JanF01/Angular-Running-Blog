import { Component, OnInit } from '@angular/core';

import { WordpressService } from '../../wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  posts: Observable<any>;
  tags: Observable<any>;

  constructor(private wp: WordpressService) {

   }

  ngOnInit() {
    this.posts = this.wp.posts;
     this.wp.tags.subscribe(()=>{this.tags = this.wp.tags});
  }

  changeCurrent(which){
  
       this.wp.currentPostViewed = which;

  }


}
