import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  times: Observable<any[]>;
  posts: Observable<any[]>;
  distance: number = 0;
  currentPostId: number = 0;

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.times = this.wp.times;
    this.posts = this.wp.posts;
  }
  onChange(v){
this.distance = v;

  }
  showTitle(v){
    this.currentPostId = v.split(" ")[0];
    v = v.replace(this.currentPostId,"");
    document.getElementById('title').innerHTML = v;
    console.log((<HTMLSelectElement>document.getElementById('distance')).value);
  }
  sendTime(){
    this.wp.sendTime(this.currentPostId,(<HTMLInputElement>document.getElementById('czas')).value,(<HTMLSelectElement>document.getElementById('distance')).value);
  }

}
