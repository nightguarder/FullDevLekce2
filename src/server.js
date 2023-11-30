import dotenv from 'dotenv'
import express from 'express'

import indexController from './controllers/index.js'
import apiController from './controllers/api.js'
import viewController from './controllers/view.js'
import contentController from './controllers/content.js'
import router from './controllers/api.js'

dotenv.config()
const app = express()




app.set('views', './src/views');
app.set('view engine', 'ejs');

//Start your router!
app.use(router)

app.use('/', indexController)
app.use('/api', apiController)
app.use('/view', viewController)
app.use('/content', contentController)

app.listen(process.env.PORT, process.env.HOST, (err) => {
    if (err) console.log(err);
    console.log(`Server listening on http://${process.env.HOST}:${process.env.PORT}`)
})