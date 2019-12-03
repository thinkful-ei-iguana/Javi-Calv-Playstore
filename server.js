const express = require('express')
const morgan = require('morgan')
const playstore = require('./playstore')

const app = express()

app.use(morgan('dev'))

app.get('/playstore', (req,res) => {
    const genre = req.query.genre;

    let playStoreCopy = [...playstore]
    
    // playStoreCopy = playStoreCopy.filter(game => game.genres.toLowerCase().includes(genre.toLowerCase()))

    
    res.json(playStoreCopy)
})

app.listen(8080, () => console.log('listening on 8080'))