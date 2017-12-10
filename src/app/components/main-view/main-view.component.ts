import { Component, OnInit } from '@angular/core';
import { Match } from '../../classes/match';
import { MatchService } from '../../common/services/match.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  private matchs:Match[];
  private keyPressTimer: any;

  providers: [MatchService];

  constructor(private matchService: MatchService) { }


  handleFilterKeyUp (): void {
    
            if (this.keyPressTimer) {
                clearTimeout(this.keyPressTimer);
            }
    
            this.keyPressTimer = setTimeout(() => {
                this.loadMatchs();
            }, 200);
        }
    
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
