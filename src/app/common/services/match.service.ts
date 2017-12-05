import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import { Match, MatchInterface } from '@classes/match';


@Injectable()

class MatchService {

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

  getMatchbyId (matchId: string): Promise<void | any>  {
    const params = this.getParams({});
    
    const url = 'matchs/' + matchId;
    
    return this.http.get(this.getApiUrl(url), {params: params})
        .toPromise()
        .then(response => response.json().results.map((data: MatchInterface) => new Match(data)))
        .catch(this.handleError);
  }

  getMatchsInProgress (): Promise<void | Match[]>  {
    const params = this.getParams({
        inProgress: true
    });
    
    const url =  'matchs';
    return this.http.get(this.getApiUrl(url), {params: params})
        .toPromise()
        .then(response => response.json().results.map((data: MatchInterface) => new Match(data)))
        .catch(this.handleError);
  }


  
  handleError (error:Response): void {
    console.log(error);
  }

}

export { MatchService };

//No pude relacionar las 2 todavia, el tema que cuando muestro
//Y de la forma que vos me decis, en el match tengo que declarar una variable team []?
//Y sacandole el map anda igual ? asi de una ?
//Okasss Una ves que anda le pongo colores y formato, antes no jajajaja
// Segui toda la estructura que hiciste vos en el anterior, con el handle y todo eso
//Genial. Volve a estudiar fisica jajaja
//Seguro mas adelante te jodo de nuevo. Gracias!