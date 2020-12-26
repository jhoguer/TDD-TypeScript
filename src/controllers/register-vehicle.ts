import { HttpResponse, HttpRequest } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requireProperties = ['name', 'model', 'year', 'color']
    for (const props of requireProperties) {
      if (httpRequest.body[props] === undefined) {
        return {
          statusCode: 400,
          body: new Error(`error in the: ${props}`)
        }
      }
    }
  }
}
