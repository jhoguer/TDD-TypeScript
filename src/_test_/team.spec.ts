import { Team } from '../models/team-model'

describe('Team class', () => {
  it('Position', () => {
    const team = new Team()
    const position = {
      name: 'goalKeeper',
      tShirt: 1,
      skills: ['kick hard', 'Run Fast', 'Jump high']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['goalKeeper', 1, ['kick hard', 'Run Fast', 'Jump high']])
  })

  it('Position', () => {
    const team = new Team()
    const position = {
      name: 'Center MidField',
      tShirt: 14,
      skills: ['kick hard', 'Run Fast']
    }

    expect(team.position(position.name, position.tShirt, position.skills)).toEqual(['Center MidField', 14, ['kick hard', 'Run Fast']])
  })

  it('Soccer  Play', () => {
    const soccerPlay = new Team()
    expect(soccerPlay.attacker('')).toBe('attacker')
  })
})
