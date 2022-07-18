import dotenv from 'dotenv'
import server from './src/server'
import { logError, logSuccess } from './src/utils/logger'

// * Configuration the .evn file
dotenv.config()

const port = process.env.PORT || 8000

// * Execute server to listen on port 8000

server.listen(port, () => {
  logSuccess(`[SERVER ON]:Server running in http://localhost:${port}/api`)
})

// * Control SERVER ERROR
server.on('error', (error) => {
  logError(`[SERVER ERROR]: ${error}`)
})
