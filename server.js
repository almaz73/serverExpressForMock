/**Для запуска сервера : npm server */

let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors());

var books = [{
    id: 0,
    name: 'Vue3'
}, {
    id: 1,
    name: 'Vue2'
}, {
    id: 2,
    name: 'VueJs'
},]

app.get('/books', function (req, res) {
    res.send(books)
})

var server = app.listen(3000, function () {
    console.log('server started')
})




