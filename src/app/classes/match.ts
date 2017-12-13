import { Team, TeamInterface } from './team';

interface MatchInterface {
    _id:string,
    status:String,
    startDate:Date
    teams: TeamInterface[]
}

class Match {
    id:string;
    status:String;
    startDate:Date;
    teams: Team[];

    constructor(data: MatchInterface){
        
        this.id=data._id;
        this.status=data.status;
        this.startDate=data.startDate;

        this.teams = new Array();
        data.teams.forEach(team => this.teams.push(new Team(team)));
    }


}

export { Match };