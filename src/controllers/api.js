//Default API komunikace
import express from 'express'
const router = express.Router()

router.get('/greeter/:name', function(req, res) {
    res.json({message: `Hello ${req.params.name}`})
});

export default router