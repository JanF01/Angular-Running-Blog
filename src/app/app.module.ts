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
import { ViewComponent } from './view/view.component';
import { WordpressService } from './wordpress.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatCardModule, MatButtonModule } from '@angular/material';

const materialModules = [
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
];


const appRoutes: Routes = [
 { path: 'kalendarz', component: CalendaryComponent },
 { path: 'cele', component: GoalsComponent },
 { path: 'zawody', component: RacesComponent },
 { path: '', component: MainComponent },
 { path:'view', component: ViewComponent}
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
    ViewComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    HttpClientModule,
    NoopAnimationsModule,
    materialModules
  ],
  providers: [WordpressService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
