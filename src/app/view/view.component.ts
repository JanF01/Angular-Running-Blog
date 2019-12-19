import { Component, OnInit, Input, ɵɵresolveBody } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
 

   posts: Observable<any[]>;
   tags: Observable<any[]>;
   active: number = 0;
  constructor(private wp: WordpressService){ 
      
  }

  ngOnInit() {
     this.posts = this.wp.posts;
     this.tags = this.wp.tags;



     this.active = this.wp.currentPostViewed;

     (<HTMLElement>document.getElementsByClassName("container")[0]).style.right="calc( 100% * "+this.active+" )";
  }

  goBack(){
     history.back();

  }

  changePost(b){
     if(!b && this.active<=(<HTMLElement>document.getElementsByClassName("container")[0]).offsetWidth/document.body.offsetWidth+1){
        this.active++;
     (<HTMLElement>document.getElementsByClassName("container")[0]).style.right="calc( 100% * "+this.active+" )";
     }
     else if(b && this.active>0){
        this.active--;
     (<HTMLElement>document.getElementsByClassName("container")[0]).style.right="calc( 100% * "+this.active+" )";
     }
  }
}
