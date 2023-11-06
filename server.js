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

var libraries = [{
    id: 0,
    name: 'Vue3'
}, {
    id: 1,
    name: 'AngularJs'
}, {
    id: 2,
    name: 'React'
},]

app.get('/libraries', function (req, res) {
    res.send(libraries)
})

var server = app.listen(3000, function () {
    console.log('server started')
})




