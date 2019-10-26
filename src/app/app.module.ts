import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UpperComponent } from './main/upper/upper.component';
import { PostsComponent } from './main/posts/posts.component';
import { ContentComponent } from './main/content/content.component';
import { ScoresComponent } from './main/content/scores/scores.component';
import { AboutComponent } from './main/content/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { CalendaryComponent } from './calendary/calendary.component';
import { MainComponent } from './main/main.component';
import { GoalsComponent } from './goals/goals.component';
import { RacesComponent } from './races/races.component';


const appRoutes: Routes = [
 { path: 'kalendarz', component: CalendaryComponent },
 { path: 'cele', component: GoalsComponent },
 { path: 'zawody', component: RacesComponent },
 { path: '', component: MainComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    UpperComponent,
    PostsComponent,
    ContentComponent,
    ScoresComponent,
    AboutComponent,
    FooterComponent,
    CalendaryComponent,
    MainComponent,
    GoalsComponent,
    RacesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
