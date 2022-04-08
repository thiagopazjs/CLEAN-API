export class ServerError extends Error {
  constructor () {
    super('Internal Server Error try again Later')
    this.name = 'ServerError'
  }
}
