import { IBird } from '../interfaces/IBird'

export class Bird {
  constructor (public ibird: IBird) {
    Object.assign(this, ibird)
  }

  fly (): any {
    return this.ibird.name
  }
}

export class Eagle extends Bird {
  fly (): any {
    return this.ibird.name
  }
}

export class Penguin extends Bird {
  fly (): any {
    return new Error('I cant Fly')
  }

  walk (): any {
    return 'I can Walk'
  }

  swim (): any {
    return 'I can Swim'
  }
}
