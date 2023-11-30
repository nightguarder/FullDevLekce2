import express from 'express'
const router = express.Router()

router.get('/greeter/:name', function(req, res) {
    res.render('greeter', { name: req?.params?.name });
});

export default router