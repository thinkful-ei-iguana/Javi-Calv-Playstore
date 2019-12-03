const express = require('express')
const morgan = require('morgan')
const playstore = require('./playstore')

const app = express()

app.use(morgan('dev'))

app.get('/apps', (req,res) => {
    const genre = req.query.genres;

    let playStoreCopy = [...playstore]
    
    
    playStoreCopy = playStoreCopy.filter(game => game.Genres.toLowerCase().includes(genre.toLowerCase()))

    
    res.json(playStoreCopy)
})

app.listen(8000, () => console.log('listening on 8000'))