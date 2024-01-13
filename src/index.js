const express = require('express')
const mongoose = require('mongoose');

const app = express()
app.use(express.json())
const port = 3000


const Movie = mongoose.model('Movie', { 
    title: String,
    description: String, 
    image_url:String, 
    trailer_url:String, 
});

app.get('/', (req, res) => {
const movies = Movie.find()
  res.send('Movie list')
})

app.post('/', async (req,res)=> {
    const movie = new Movie({
        title:req.body.title,
        description:req.body.description,
        image_url:req.body.image_url,
        trailer_url:req.body.trailer_url
    })

    await movie.save()

    res.send(movie)
})

app.delete("/:id", async(req,res)=>{
    const film = await Film.findById(req.params.id)
})

app.put("/:id", async(req,res)=>{
    const movie = await Film.findByIdAndUpdate(req.params.id, {
        title:req.body.title,
        description:req.body.description,
        image_url:req.body.image_url,
        trailer_url:req.body.trailer_url
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)




  mongoose.connect('mongodb+srv://natinaelsued:NovaSenha@starwarsapi.8gacyqz.mongodb.net/?retryWrites=true&w=majority');

})