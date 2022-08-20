import express from 'express'
import Homecontroller from '../controller/Homecontroller'

let router = express.Router();

const initWebRoute = (app) => {
   router.get('/', Homecontroller.handlehome)
   router.post('/creat-user',Homecontroller.creatuser)
   router.get('/detail/user/:id', Homecontroller.getDetailPage )
   app.use('/', router)
}

export default initWebRoute;