export const logger = {
  info: (message: string) => {
    console.log(`INFO: ${message}`)
  },
  error: (message: string) => {
    console.error(`ERROR: ${message}`)
  },
  http: (message: string) => {
    console.log(`HTTP: ${message}`)
  },
}
