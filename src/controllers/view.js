import express from 'express'
const router = express.Router()


// Handle GET requests to the path /greeter/:name
// Kdokoliv zavola tento get request dostane greeter.ejs odpoved s name
// http://localhost/greeter/Cyril
router.get('/greeter/:name', function(req, res) {
    console.log('Received request:', req.url);
    console.log('Params:', req.params);
    res.render('greeter', { name: req?.params?.name });
});

export default router