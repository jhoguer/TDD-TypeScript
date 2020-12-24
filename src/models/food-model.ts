export class Food {
  constructor (
    private readonly name: string,
    private readonly desciption: string,
    private readonly price: number
  ) {
    this.name = name
    this.desciption = desciption
    this.price = price
  }

  getName (): string {
    return this.name
  }

  getDescription (): string {
    return this.desciption
  }

  getPrice (): number {
    return this.price
  }
}
