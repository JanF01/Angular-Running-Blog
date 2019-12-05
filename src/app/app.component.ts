import { Component } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'intense';
  token = null;

  ngOnInit(){

  window.onscroll = function() {
    if(window.pageYOffset>100){
      document.getElementsByTagName('ul')[0].style.height='1em';
     document.getElementsByTagName('input')[0].style.top='15%';
     document.getElementsByTagName('img')[0].style.height='3em';
     document.getElementsByTagName('img')[1].style.top='0.5em';
    }
    else if(window.pageYOffset<100){
      document.getElementsByTagName('ul')[0].style.height='2em';
     document.getElementsByTagName('input')[0].style.top='25%';
     document.getElementsByTagName('img')[0].style.height='3.7em';
     document.getElementsByTagName('img')[1].style.top='1em';
    }
  };
}
}
