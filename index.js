const express = require('express')
const app = express()
const port = process.env.PORT ||5000
const cors =require('cors')

const catagoris = require('./data/catagory.json')
const news = require('./data/news.json')
app.get('/',(req,res)=>{
    res.send(catagoris)
})
app.use(cors())
app.get('/news-catagories/',(req,res)=>{
    res.send(catagoris)
})
app.get ('/news',(req,res)=>{
    res.send(news)
})
app.get('/catagory/:id',(req,res)=>{
    const id =req.params.id; 
    
    if(id === '08'){
        res.send(news)
    }
    else{

        const Catagory_news =news.filter(ca =>ca.category_id=== id)
        res.send(Catagory_news)
    }
    })
app.get ('/news/:id',(req,res)=>{
    
    const id =req.params.id;
        const catagoryNews = news.find(n =>n._id === id)
        res.send(news)
    

  
})
app.listen(port,()=>{
    console.log(`Mofassel ${port}`);
})