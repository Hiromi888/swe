const express = require("express")
const path = require("path")
const bodyParser = require('body-parser') // for parsing body content
const routing = require("./routing")
const middleware = require('./routing/middleware')
const cors=require('cors')
const app = express()
const port = process.env.PORT||5000

app.use(cors())

app.use(express.json())

app.use(express.static(path.join(__dirname, "../client"))) // serve static files under the client folder

app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
    extended: true
}));

app.use('/', middleware, routing)
app.get('/api/',(req,res)=>{
    res.json({message:'Hello from the back-end!'})
})


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
