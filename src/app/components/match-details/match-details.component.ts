import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from "../../common/services/match.service";
import { Match } from "../../classes/match";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})

export class MatchDetailsComponent implements OnInit {

  private match : Match;

  providers: [MatchService]

  constructor(private matchService: MatchService, private activatedRoute:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this.loadMatch(this.activatedRoute.snapshot.params.matchId)
  }

  loadMatch(matchId:string): void {
    this.matchService.getMatchbyId(matchId).then(this.handleMatchLoad.bind(this), this.handleError.bind(this));
  }

  handleMatchLoad(match:Match) : void {
    if (match === undefined) return;
    this.match = match;
  }

  handleError() : void{
    console.log("An error ocurred when try to load the selected match.");
  }

  backtoHome (): void{
    this._router.navigate(['/']);
}


}