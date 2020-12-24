import { HttpResponse, HttpRequest } from '../interfaces/http-interface'

export class RegisterVehicle {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (httpRequest.body.name === undefined) {
      return {
        statusCode: 400,
        body: new Error('error in the: name')
      }
    }

    if (httpRequest.body.model === undefined) {
      return {
        statusCode: 400,
        body: new Error('error in the: model')
      }
    }
  }
}
