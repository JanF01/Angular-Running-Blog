import { Component, OnInit } from '@angular/core';
import { WordpressService } from 'src/app/wordpress.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  info: Observable<any[]>;
  wyniki: Observable<any[]>
  bramki = [0,0,0,0];

  constructor(private wp: WordpressService) { }

  ngOnInit() {
    this.info = this.wp.information;
    this.wyniki = this.wp.times;
  }

  showScores(which: string,event: Event,i: number){
    let elem = (event.target || event.srcElement || event.currentTarget) as HTMLElement;
    let wyniki = document.getElementsByClassName(which) as HTMLCollectionOf <HTMLElement>;
    if(!this.bramki[i]){
       elem.innerHTML = "Schowaj poprzednie";
       for(let i=0;i<wyniki.length;i++){
       wyniki[i].style.display="block";
       }
       this.bramki[i]=1;
      }
      else{
        elem.innerHTML = "Zobacz poprzednie";
        for(let i=0;i<wyniki.length;i++){
        wyniki[i].style.display="none";
        }
        this.bramki[i]=0;
      }
  }

}
