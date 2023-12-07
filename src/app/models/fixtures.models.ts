export interface FixturesResponseModel {
    get: string
    parameters: Parameters
    errors: Errors
    results: number
    paging: Paging
    response: Response[]
  }

  export interface Errors{
    token?: string
  }
  
  export interface Parameters {
    team: string
    season: string
    last: string
  }
  
  export interface Paging {
    current: number
    total: number
  }
  
  export interface Response {
    fixture: Fixture
    league: League
    teams: Teams
    goals: CommonMatch
    score: Score
  }
  
  export interface Fixture {
    id: number
    referee: string
    timezone: string
    date: string
    timestamp: number
    periods: Periods
    venue: Venue
    status: Status
  }
  
  export interface Periods {
    first: number
    second: number
  }
  
  export interface Venue {
    id: number
    name: string
    city: string
  }
  
  export interface Status {
    long: string
    short: string
    elapsed: number
  }
  
  export interface League {
    id: number
    name: string
    country: string
    logo: string
    flag?: string
    season: number
    round: string
  }
  
  export interface Teams {
    home: Home
    away: Away
  }
  
  export interface Home {
    id: number
    name: string
    logo: string
    winner?: boolean
  }
  
  export interface Away {
    id: number
    name: string
    logo: string
    winner?: boolean
  }
  
  export interface Score {
    halftime: CommonMatch
    fulltime: CommonMatch
    extratime: CommonMatch
    penalty: CommonMatch
  }
  
  export interface CommonMatch {
    home?: number
    away?: number
  }

  export interface CommonMatch1 {
    home: number
    away: number
  }

  export interface FixturesModel{
    teams: TeamDeatils
    goals: GoalDetails;
  }
  export interface TeamDeatils{
    home: HomeDetails;
    away: AwayDetails;
  }
  export interface GoalDetails{ 
    home?: number; 
    away?: number; 
  }
  export interface HomeDetails{
    logo: string; 
    name: string; 
  }
  export interface AwayDetails{
    logo: string; 
    name: string; 
  }
  export interface GetFixturesRouterParams{
    id?: number,
    leagueId?: string
  }
  

  