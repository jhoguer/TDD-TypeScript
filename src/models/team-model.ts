import { ISoccerPlay, ITeam } from '../interfaces/ITeam'

export class Team implements ITeam, ISoccerPlay {
  attacker: (name: string) => void
  position (name: string, tShirt: number, skills: any[]): any {
    return [name, tShirt, skills]
  }
}
