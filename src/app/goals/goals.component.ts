import { Component, OnInit } from '@angular/core';
import { WordpressService } from '../wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals: Observable<any[]>;
  doneGoals: Observable<any[]>;
  currentlyEdited: string;

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.goals = this.wp.goals;
    this.doneGoals = this.wp.doneGoals;
  }

  edit(title,content){
    this.currentlyEdited=title;
    (<HTMLTextAreaElement>document.getElementById('title')).value=title;
    (<HTMLTextAreaElement>document.getElementById('additions')).value=content;
  }
  add(){

  }
  save(){
    this.wp.postGoalChange(this.currentlyEdited,(<HTMLTextAreaElement>document.getElementById('title')).value,(<HTMLTextAreaElement>document.getElementById('additions')).value);
  }

}
