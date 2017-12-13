import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from "../../common/services/match.service";
import { Match } from "../../classes/match";
import { ActivatedRoute } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  private match : any;
  private matchId : string;
  private teams: any

  providers: [MatchService]

  constructor(private matchService: MatchService, private activatedRoute:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this.matchId=this.activatedRoute.snapshot.params.matchId;
    this.loadMatch(this.matchId)
  }

  loadMatch(matchId:string): void {
    this.matchService.getMatchbyId(this.matchId).then(this.handleMatchLoad.bind(this), this.handleError.bind(this));
  }

  handleMatchLoad(match:any) : void {
    if (match === undefined) return;
    this.match = match;
    this.match.teams.forEach(element => {
      this.teams[0]=element;
      
    });


    console.log(match);

  }
  handleError() : void{
    console.log("An error ocurred when try to load the selected match.");
  }

  backtoHome (): void{
    this._router.navigate(['/']);
}


}