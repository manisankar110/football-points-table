  export interface StandingsModel {
    get: string
    parameters: Parameters
    errors: Errors
    results: number
    paging: Paging
    response: Response[]
  }
  
  export interface Parameters {
    league: string
    season: string
  }

  export interface Errors {
    token: string
  }
  
  export interface Paging {
    current: number
    total: number
  }
  
  export interface Response {
    league: League
  }
  
  export interface League {
    id: number
    name: string
    country: string
    logo: string
    flag: string
    season: number
    standings: Standing[][]
  }
  
  export interface Standing {
    rank: number
    team: Team
    points: number
    goalsDiff: number
    group: string
    form: string
    status: string
    description?: string
    all: All
    home: Home
    away: Away
    update: string
  }
  
  export interface Team {
    id: number
    name: string
    logo: string
  }
  
  export interface All {
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals
  }
  
  export interface Goals {
    for: number
    against: number
  }
  
  export interface Home {
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals2
  }
  
  export interface Goals2 {
    for: number
    against: number
  }
  
  export interface Away {
    played: number
    win: number
    draw: number
    lose: number
    goals: Goals3
  }
  
  export interface Goals3 {
    for: number
    against: number
  }

  export interface StandingResponse {
    rank: number; 
    team: { id: number; name: string; logo: string; }; 
    points: number; 
    goalsDiff: number; 
    all: { played: number; win: number; draw: number; lose: number; }; 
  }

  export interface TopFootballLeagues{
    id: number; 
    name: string; 
  }

  export interface GetDashboardRouterParams{
    leagueId?: string
  }

  