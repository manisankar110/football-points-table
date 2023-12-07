import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { StandingsModel } from '../models/standing.models';
import { FixturesResponseModel } from '../models/fixtures.models';


@Injectable({
    providedIn: 'root'
})
export class SharedService {

    apiUrl = 'https://v3.football.api-sports.io/'
    httpOptions = { 
        headers: new HttpHeaders({ 
            'x-rapidapi-host': 'v3.football.api-sports.io', 
            'x-rapidapi-key': '91d994fd285da23dc803cdddb37ce619' 
        }) 
    };

    constructor(private httpClient: HttpClient) { }

    getStandings(params: {id:number, season: number}): Observable<StandingsModel> {
        return this.httpClient.get<StandingsModel>(`${this.apiUrl}/standings?league=`+ params.id + `&season=` +params.season, this.httpOptions);
    }


    getFixtures(params: {teamId?:number, season: number, last: number}): Observable<FixturesResponseModel> {
        return this.httpClient.get<FixturesResponseModel>(`${this.apiUrl}/fixtures?team=`+ params.teamId + `&season=` + params.season + `&last=` + params.last, this.httpOptions);
    }

}
