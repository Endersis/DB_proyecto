const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{

    req.getConnection((err, conn)=> {
        if(err) return res.send(err)

        conn.query('SELECT * FROM registro', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})
module.exports = routes