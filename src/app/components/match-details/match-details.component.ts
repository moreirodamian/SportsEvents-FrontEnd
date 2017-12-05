import { Component, OnInit } from '@angular/core';
import { MatchService } from "../../common/services/match.service";
import { Match } from "../../classes/match";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {

  private match : any;
  private matchId : string;

  providers: [MatchService]

  constructor(private matchService: MatchService, private activatedRoute:ActivatedRoute) { }

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

  }
  handleError() : void{
    console.log("An error ocurred when try to load the selected match.");
  }


}
//Que chat verga boludo.
//Fijate que esta posman, intenta hacer alfo