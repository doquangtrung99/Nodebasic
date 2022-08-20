import express from 'express'
import configViewEngine from './config/viewEngine'
import initWebRoute from './route/web'

const app = express()
const port = 3000

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

configViewEngine(app);


initWebRoute(app);

app.listen(port, () => {
  console.log( `${port}`)
})