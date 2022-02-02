const express = require('express')
const { appendFileSync } = require('fs')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.listen('3000', () => {
    console.log('Listening on port 3000')
})

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    res.render('cats')
})