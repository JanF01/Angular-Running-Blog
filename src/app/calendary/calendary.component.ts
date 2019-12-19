import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrls: ['./calendary.component.scss']
})
export class CalendaryComponent implements OnInit {

  posts$: Observable<any[]>;
  tags$: Observable<any[]>;

  constructor(private wp: WordpressService) {
         this.posts$ = this.wp.posts;
         this.tags$ = this.wp.tags;
   }

  ngOnInit() {
  }

  mouseenter(wh){
  

  }
  changeCurrent(which){
    console.log(which);
       this.wp.currentPostViewed = which;

  }

}
