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
   length: number;
  constructor(private wp: WordpressService){ 
      
  }

  ngOnInit() {
     this.posts = this.wp.calendary;
     this.tags = this.wp.tags;



     this.active = this.wp.currentPostViewed;
     this.posts.subscribe((result) => {this.length = result.length});
  }

  goBack(){
     history.back();

  }

  changePost(b){

     if(!b && this.active<this.length-1){

        
        this.active++;
    
    
 
     }
     else if(b && this.active>0){
 
     
         this.active--;
     
        
     }
  }
}
