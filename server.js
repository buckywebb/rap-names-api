const express = require('express')
const app = express()
const PORT = 8000

//Object
const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthPlace': 'London, England'
        },
    'chance the rapper': {
        'age': 30,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthPlace': 'Chicago, IL'
    },

    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthPlace': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]) {
        response.json(rappers[rapperName].birthName)
    }else {
        response.json(rappers.unknown)
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log(`The server is now running on port ${PORT}.`)
})