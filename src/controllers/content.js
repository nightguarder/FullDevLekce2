//Example jak browser komunikuje s serverem pomoci GET requestu
import express from 'express'
const router = express.Router();

const imageUrl = 'https://example.com/image.jpg';

router.get('/json', function (req, res) {
    res.json({ contentType: 'json' })
    
});

router.get('/html', function (req, res) {
    res
        .setHeader('content-type', 'text/html')
        .send({ contentType: '<b>json</b>' })
});

router.get('/image/:imgid', (req, res) => {
    
    const imageUrl = '/img/image' + req.params.imgid +'.png'
    res.render('image', { imageUrl: imageUrl });
});

router.get('/png', function (req, res) {
    const base64Data = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAATrAAAE6wHYKlsNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAd9JREFUOI2VUs1LVFEcPffDNx+vYUZEwgoMSsEYsjalELqYXAQtmmoVJRMlgdLi7VLcGf0BZVGbIow2LQL72IyugshGDGvxwk2bCIxkkqm5b97cjxY2j5nyPfDszu+ce36/+7uXIQJ2pnAE8exu7X1cD/PQMKEtc7F/KKnenLT5otU+enjHARY44cQwBm0Zo0nUpKGIpy+NxdOjV6M8TcnXY7H2nzmqYTcqmpABAKDGvAtqFL9r5cwicKcGALwhHB/u+JA/d7p3T+cuFtWxXP5Vu/+g+N5dxVBLQKYj1X32/AnWmeLhp7cQez5f2u+ubhHe1X1thnKW00oFC529+xqEEEyMn9qWGwO+98D4WyP1Ak2lEwXHGRmUdRkEvHi1jPmXywjjWinLcUYG7XSiwCn7/8qzt8dACAnlDTBGCScwyaoQUFoHQs/Brhbjv1xpRatCgEAnuah6vLS0hrqvWz7V1PRT9PXtAwC47lfcunkh0KRUvLS0BiF8zr/9qAysFyvZ4Vz/Y9P0KpM38lhZ+QIAyJ851jKBbSc3F4qfryjOPnF/Y84F4Pp+9qGoa3yvyL+/qw2HjvYCAIQGREUGAUYjITbnngFNHT3Pe+RM3Lscs7bZahNqvlK+lE+iPDvCH4cIsGPY0ql2AAAAAElFTkSuQmCC"
    res
        .setHeader('content-type', 'image/png')
        .send(Buffer.from(base64Data, 'base64'))
})


export default router