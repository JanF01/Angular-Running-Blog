import { Component, OnInit } from '@angular/core';

import { WordpressService } from '../../wordpress.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  

  constructor(private wp: WordpressService) { }

  ngOnInit() {
  }

}
