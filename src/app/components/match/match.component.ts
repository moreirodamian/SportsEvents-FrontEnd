import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from '../../classes/match';
import { MatchService } from '../../common/services/match.service';

@Component({
  selector: 'match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent {

  @Input() match: Match;
  providers: [MatchService]

  constructor(private movieService: MatchService,private _router:Router){ }

  showDetails (matchId:string): void{
      this._router.navigate(['/match-details', matchId]);
  }

}
