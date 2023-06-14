export class PastDateError extends Error {
  constructor(message) {
    super(message)
    this.name = "PastDateError"
  }
}