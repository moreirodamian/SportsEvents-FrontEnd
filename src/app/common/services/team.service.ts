import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Team, TeamInterface } from '@classes/team';


@Injectable()
 class TeamService {

  private apiUrl: string = 'localhost:2000';

  constructor(private http: Http) { }
  
  getApiUrl (url: string): string {
    return this.apiUrl + url;
  }

  getParams (paramsData: any): URLSearchParams {
    const keys = Object.keys(paramsData);
    const params = new URLSearchParams();


    keys.forEach((key: string) => {
        params.set(key, paramsData[key]);
    });

    return params;
  }

  getTeambyId (teamId: string): Promise<void | any>  {
    const params = this.getParams({
      
    });
    
    const url = 'teams/' + teamId;
    return this.http.get(this.getApiUrl(url), {params: params})
        .toPromise()
        .then(response => response.json().results.map((data: TeamInterface) => new Team(data)))
        .catch(this.handleError);
  }
  
  handleError (error:Response): void {
    console.log(error);
  }

}
export { TeamService };