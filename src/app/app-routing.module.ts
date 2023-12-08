import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';

const routes: Routes = [
  {
    path: 'football-points-table',
    component: DashboardComponent,
  },
  {
    path: 'football-points-table/:leagueId',
    component: DashboardComponent,
  },
  { path: 'football-points-table/:leagueId/:id', component: MatchDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
