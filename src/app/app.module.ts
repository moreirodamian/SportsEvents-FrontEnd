import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { RouterModule, Routes} from '@angular/router';
import { MatchComponent } from './components/match/match.component';


const routes:Routes =[
  {
    path: 'match-details/:matchId',
    component: MatchDetailsComponent
  },
  
  {
    path: 'home',
    component: MainViewComponent
  },

  {
    path:'',
    component: MainViewComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    MatchDetailsComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
