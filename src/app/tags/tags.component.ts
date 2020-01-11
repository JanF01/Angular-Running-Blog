import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  posts: Observable<any[]>;
  tags: Observable<any[]>;
  currentId: number;
  constructor(private wp: WordpressService) { }

  ngOnInit(){
    this.posts = this.wp.posts;
    this.tags = this.wp.tags;
  }

  getTags(id){
    this.currentId = id;
  }
  editTags(){
    let id = this.currentId;
    let dystans = (<HTMLInputElement>document.getElementById("dystans")).value;
    let wysilek = (<HTMLInputElement>document.getElementById("wysilek")).value;
    let czas = (<HTMLInputElement>document.getElementById("czas")).value;
    let typ = (<HTMLSelectElement>document.getElementById("typ")).value;
    this.wp.editTags(id,dystans,wysilek,czas,typ);

  }
  postTags(){
    let id = (<HTMLInputElement>document.getElementById("id")).value;
    let dystans = (<HTMLInputElement>document.getElementById("dystans")).value;
    let wysilek = (<HTMLInputElement>document.getElementById("wysilek")).value;
    let czas = (<HTMLInputElement>document.getElementById("czas")).value;
    let typ = (<HTMLSelectElement>document.getElementById("typ")).value;
    this.wp.postTags(id,dystans,wysilek,czas,typ);

  }

}
