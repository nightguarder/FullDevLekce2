//Example jak browser komunikuje s serverem
import express from 'express'
const router = express.Router()

router.get('/json', function (req, res) {
    res.json({ contentType: 'json' })
});

router.get('/html', function (req, res) {
    res
        .setHeader('content-type', 'text/html')
        .send({ contentType: '<b>json</b>' })
});

router.get('/png', function (req, res) {
    const base64Data = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAATrAAAE6wHYKlsNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAd9JREFUOI2VUs1LVFEcPffDNx+vYUZEwgoMSsEYsjalELqYXAQtmmoVJRMlgdLi7VLcGf0BZVGbIow2LQL72IyugshGDGvxwk2bCIxkkqm5b97cjxY2j5nyPfDszu+ce36/+7uXIQJ2pnAE8exu7X1cD/PQMKEtc7F/KKnenLT5otU+enjHARY44cQwBm0Zo0nUpKGIpy+NxdOjV6M8TcnXY7H2nzmqYTcqmpABAKDGvAtqFL9r5cwicKcGALwhHB/u+JA/d7p3T+cuFtWxXP5Vu/+g+N5dxVBLQKYj1X32/AnWmeLhp7cQez5f2u+ubhHe1X1thnKW00oFC529+xqEEEyMn9qWGwO+98D4WyP1Ak2lEwXHGRmUdRkEvHi1jPmXywjjWinLcUYG7XSiwCn7/8qzt8dACAnlDTBGCScwyaoQUFoHQs/Brhbjv1xpRatCgEAnuah6vLS0hrqvWz7V1PRT9PXtAwC47lfcunkh0KRUvLS0BiF8zr/9qAysFyvZ4Vz/Y9P0KpM38lhZ+QIAyJ851jKBbSc3F4qfryjOPnF/Y84F4Pp+9qGoa3yvyL+/qw2HjvYCAIQGREUGAUYjITbnngFNHT3Pe+RM3Lscs7bZahNqvlK+lE+iPDvCH4cIsGPY0ql2AAAAAElFTkSuQmCC"
    res
        .setHeader('content-type', 'image/png')
        .send(Buffer.from(base64Data, 'base64'))
})

router.get('/svg', function (req, res) {
    const base64Data = "PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgY2xhc3M9Imljb24gaWNvbi10YWJsZXIgaWNvbi10YWJsZXItYnJhbmQtbG9vbSIgZmlsbD0ibm9uZSIgaGVpZ2h0PSIyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNMTcuNDY0IDYuNTE4YTYuMDAxIDYuMDAxIDAgMSAwIC0zLjAyMyA3Ljk2NSIvPjxwYXRoIGQ9Ik0xNy40ODIgMTcuNDY0YTYuMDAxIDYuMDAxIDAgMSAwIC03Ljk2NSAtMy4wMjMiLz48cGF0aCBkPSJNNi41NCAxNy40ODJhNi4wMDEgNi4wMDEgMCAxIDAgMy4wMjQgLTcuOTY1Ii8+PHBhdGggZD0iTTYuNTE4IDYuNTRhNi4wMDEgNi4wMDEgMCAxIDAgNy45NjUgMy4wMjQiLz48L3N2Zz4=')"
    res
        .setHeader('content-type', 'image/svg+xml')
        .send(Buffer.from(base64Data, 'base64'))
})

export default router