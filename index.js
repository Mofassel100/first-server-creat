const express = require('express')
const app = express()
const port = process.env.PORT ||5000
const cors =require('cors')

const catagoris = require('./data/catagory.json')
app.get('/',(req,res)=>{
    res.send('mofassel Hosain')
})
app.use(cors())
app.get('/news-catagory',(req,res)=>{
    res.send(catagoris)
})
app.listen(port,()=>{
    console.log(`Mofassel ${port}`);
})