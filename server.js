const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./routes')
const app = express()

const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '12345',
    database: 'froebele'

}
app.set('port', process.env.PORT || 9000)
//middlewares
app.use(myconn (mysql,dbOptions, 'single'))

//routes
app.get('/',(req, res) =>{
res.send('welcome to my API')

})

app.use('/api',routes)




app.listen(9000, ()=>{
console.log('server running on port',9000)
})
