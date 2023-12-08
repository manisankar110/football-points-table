import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Last10Fixtures } from '../../models/shared.models';
import { FixturesModel, FixturesResponseModel, GetFixturesRouterParams } from '../../models/fixtures.models';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrl: './match-details.component.css'
})
export class MatchDetailsComponent {

  public selectedTeamId?: number = 0;
  public selectedLeagueId?:string = '';
  public last10Fixtures: Last10Fixtures[] = [] ;
  public currentSeason: number = (new Date()).getFullYear();

  constructor(private route: ActivatedRoute, private SharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: GetFixturesRouterParams) => {
      this.selectedTeamId = params.id
      this.selectedLeagueId = params.leagueId
    });
    // this.getTeamFixture();
  }

  getTeamFixture(){
    let params: { teamId?: number, last: number, season: number } = {
      teamId: this.selectedTeamId,
      last: 10,
      season: this.currentSeason
    }
    this.SharedService.getFixtures(params).subscribe(
      (response: FixturesResponseModel) => {
          let responseData = response.response
          responseData.forEach( (x: FixturesModel) => {
            this.last10Fixtures.push({
              homeLogo: x.teams.home.logo,
              homeGoal: x.goals.home,
              homeName: x.teams.home.name,
              awayLogo: x.teams.away.logo,
              awayGoal: x.goals.away,
              awayName: x.teams.away.name
            })
          })
      },
  );
  }

  goBackToPrevPage(){
    this.router.navigate(['/',this.selectedLeagueId, ]);
  }
}
