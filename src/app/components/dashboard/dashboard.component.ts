import { Component } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectedLeagueDetails, StandingsDetails } from '../../models/shared.models';
import { GetDashboardRouterParams, SelectedLeague, StandingResponse, TopFootballLeagues, StandingsModel } from '../../models/standing.models';
interface paramsData{
  league?: string
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

  constructor( private SharedService: SharedService, private route: ActivatedRoute, private router: Router) { }
  
  public selectedleague: SelectedLeague[] = [];
  public routeParams: string = '';
  public topFootballLeagues: TopFootballLeagues[] = [
      { id:39, name: 'england' },
      { id:140, name: 'spain' },
      { id:78, name: 'germany' },
      { id:61, name: 'france' },
      { id:135, name: 'italy' },
  ]
  public selectedLeagueDetails: SelectedLeagueDetails = {
    id: 0,
    name: '',
    country: '',
    logo: '',
    flag: '',
    season: 0,
  };
  public standingsDetails: StandingsDetails[] = [];
  public currentSeason: number = (new Date()).getFullYear();

  ngOnInit(): void {
    // alert()
    this.route.queryParams
      .subscribe((params: paramsData) => {
        console.log(params)
        // let paramsData = params.league ?? 'england'
        //   this.router.navigate(
        //     ['/dashboard'],
        //     { queryParams: { league: paramsData } 
        //   });
        //   let findLeagueId = this.topFootballLeagues.filter( (x: TopFootballLeagues) => x.name == paramsData)
        //   console.log('findLeagueId-----',findLeagueId)
          // this.getStandingDetails(findLeagueId[0].id);
      }
    );
  }

  getStandingDetails(id: number){
    this.selectedleague =  this.topFootballLeagues.filter( (leagueID: TopFootballLeagues) => leagueID.id === id);
    let params:{ id:number, season:number } = {
      id: id,
      season: this.currentSeason
    }

    this.SharedService.getStandings(params).subscribe(
        (response: StandingsModel) => {
            if(response.response.length > 0){
              this.standingsDetails = []
              let responseData = response.response[0].league
              this.selectedLeagueDetails = {
                  id: responseData.id,
                  name: responseData.name,
                  country: responseData.country,
                  logo: responseData.logo,
                  flag: responseData.flag,
                  season: responseData.season,
              }
              responseData.standings[0].forEach( (x: StandingResponse) => {
                this.standingsDetails.push({
                  rank: x.rank,
                  teamId: x.team.id,
                  teamName: x.team.name,
                  logo: x.team.logo,
                  totalPoints: x.points,
                  goalsDiff: x.goalsDiff,
                  played: x.all.played,
                  win: x.all.win,
                  draw: x.all.draw,
                  lose: x.all.lose
                })
              })
            }
        },
    );
  }

  teamClicked(teamId: number){
    // this.router.navigate(
    //   ['/match-details'],
    //   { queryParams: { league: teamId } 
    // });
    this.router.navigate(['/',this.routeParams, teamId]);
  }

}
