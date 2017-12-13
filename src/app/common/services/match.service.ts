import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Match, MatchInterface } from '../../classes/match';


@Injectable()

class MatchService {

  private apiUrl: string = 'http://localhost:2000/';

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

  getMatchbyId (matchId: string): Promise<void | any>  {
    const params = this.getParams({});
    
    const url = 'matchs/' + matchId;
    
    return this.http.get(this.getApiUrl(url), {params: params})
        .toPromise()
        .then(response => response.json()) //.results.map((data: MatchInterface) => new Match(data)))
        .catch(this.handleError);
  }

  getMatchsInProgress (): Promise<void | Match[]>  {
    const params = this.getParams({
        inProgress: true,
        populate: true
    });
    
    const url =  'matchs';
    return this.http.get(this.getApiUrl(url), {params: params})
        .toPromise()
        .then(response => response.json()) //.results.map((data: MatchInterface) => new Match(data)))
        .catch(this.handleError);
  }


  
  handleError (error:Response): void {
    console.log(error);
  }

}

export { MatchService };
