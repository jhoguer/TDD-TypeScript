import { UrlUser } from '../protocols/exman-protocol-http'

describe('Protocols Http and Querys', () => {
  test('Url user', () => {
    const parsedUrl = UrlUser.parseUrl('http://localhost:3000/user')

    expect(parsedUrl.href).toBe('http://localhost:3000/user')
  })

  test('Response Query', () => {
    const parsedUrl = UrlUser.parseUrl('http://localhost:3000/user?user=user&password=password&name=name&lastname=lastname')
    const queryExpect = {
      user: 'user',
      password: 'password',
      name: 'name',
      lastname: 'lastname'
    }

    expect(parsedUrl.query).toEqual(queryExpect)
  })
})
