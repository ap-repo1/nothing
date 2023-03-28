const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello John Wick baba yaga')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
