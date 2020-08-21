const express = require('express')
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const cors = require('cors')
const path = require('path')
const app = express()

let database
app.use(express.static(path.join(path.resolve(), 'public')))
app.use(express.json())
app.use(cors())

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', '')
    response.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.get('/posts', (request, response) => {
    database.all('SELECT * FROM posts').then(posts => {
        response.send(posts)
    })
})

app.post('/createpost', (req, response) => {
    database.run(`INSERT INTO posts VALUES (?,?,?,?,?,?)`, [req.body.title, req.body.price, req.body.description, req.body.size, req.body.condition, req.body.contactInfo])
        .then(() => {
            response.status(200).send()
            console.log(req.body);
        })
})

sqlite.open({ driver: sqlite3.Database, filename: 'buymyshoes.sqlite' })
    .then((database_) => {
        database = database_
    })

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
