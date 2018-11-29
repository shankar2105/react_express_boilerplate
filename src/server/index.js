import path from 'path'
//
import express from 'express'
//
import registerRouter from './router'

const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))

registerRouter(app)

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})
