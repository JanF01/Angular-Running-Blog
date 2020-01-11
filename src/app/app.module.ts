import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { GoalsComponent } from './goals/goals.component';
import { AppComponent } from './app.component';
import { ScoresComponent } from './scores/scores.component';
import { TagsComponent } from './tags/tags.component';

import {HttpClientModule} from '@angular/common/http';
import { WordpressService } from './wordpress.service';


const appRoutes: Routes = [
   {path: 'goal', component: GoalsComponent},
   {path: 'score', component: ScoresComponent},
   {path: 'tag', component: TagsComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    ScoresComponent,
    TagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 



  constructor(private wp: WordpressService){
    this.wp.getGoals();
    this.wp.getDoneGoals();
    this.wp.getTimes();
    this.wp.getPosts();
    this.wp.getTags();
  }

}
