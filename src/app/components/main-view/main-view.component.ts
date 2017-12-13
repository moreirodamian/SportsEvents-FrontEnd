import { Component } from '@angular/core';
import { Match } from '../../classes/match';
import { MatchService } from '../../common/services/match.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})

export class MainViewComponent {

  private matchs: Match[];

  providers: [MatchService];

  constructor(private matchService: MatchService) { }
    
        loadMatchs (): void {
            this.matchService.getMatchsInProgress().then(this.handleMatchsLoad.bind(this));
        }
        
        handleMatchsLoad (matchs: Match[]): void {
            this.matchs = matchs;
        }
    
        ngOnInit (): void {
            this.loadMatchs();
        }

}
