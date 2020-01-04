import { Component, OnInit } from '@angular/core';
import {WordpressService} from '../wordpress.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals: Observable<any[]>;
  activeGoal: number = 0;
  amountOfGoals: number = 0;
  descriptions = [];
  mode: boolean = true;

  constructor(private wp: WordpressService) { }

  ngOnInit() {
     this.goals = this.wp.goals;
     this.goals.subscribe((result) => {this.amountOfGoals = result.length});
  }

  nextGoal(){
    if(this.activeGoal<this.amountOfGoals-1){
      this.activeGoal++;
    }
  }
  prvGoal(){
    if(this.activeGoal>0){
      this.activeGoal--;
    }
  }



  switchMode(){
    if(this.mode){
      this.mode = false;
      document.getElementById("switch").innerHTML = "<h3>AKTUALNE CELE</h3>";
      this.goals = this.wp.doneGoals;
      this.activeGoal = 0;
      this.goals.subscribe((result) => {
        this.amountOfGoals = result.length;
        for(let goal of result){
            this.descriptions.push(goal[1]);
        }
      });
    }
    else{
      this.mode = true;
      document.getElementById("switch").innerHTML = "<h3>OSIĄGNIĘTE CELE</h3>";
      this.goals = this.wp.goals;
      this.activeGoal = 0;
      this.goals.subscribe((result) => {this.amountOfGoals = result.length});
    }
  }

}
