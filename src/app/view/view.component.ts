import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  posts: Observable<any[]>;

  constructor(private wp: WordpressService) { 
    this.posts = this.wp.getPosts();
  }

  ngOnInit() {

  }

  goBack(){
     history.back();

  }
}
