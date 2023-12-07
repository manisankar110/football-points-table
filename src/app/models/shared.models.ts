export interface SelectedLeagueDetails{
    id: number,
    name: string,
    country: string,
    logo: string,
    flag: string,
    season: number,
}

export interface StandingsDetails{
    rank: number,
    teamId: number,
    teamName: string
    logo: string,
    totalPoints: number,
    goalsDiff: number,
    played: number,
    win: number,
    draw: number,
    lose: number
}

export interface Last10Fixtures{
    homeLogo: string,
    homeGoal?: number,
    homeName: string,
    awayLogo: string,
    awayGoal?: number,
    awayName: string
}
