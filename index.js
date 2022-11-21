import express from 'express';
import cors from'cors';
import 'dotenv/config'
// import { MongoClient } from 'mongodb';
import { addPost } from './posts.js'
import {posts} from './mongoConnect.js'

const app = express ()
app.use(express.json())
app.use(cors())
const PORT = 3030

// const client = new MongoClient(process.env.MONGO_URI) //Class that's imported
// const database = client.db('blog')
// const posts = database.collection('posts');

// client.connect()
// console.log('connected to mongo')

app.listen(process.env.PORT, () => {
  console.log(`api running http://localhost:${process.env.PORT}...`);
})

// post - add one post item
// --- author, date, text
// app.post ('/', async (req, res) => {
//  await posts.insertOne(req.body)
//  res.send ('Item added')
// }) 

app.post('/', addPost)

//get - to get all posts
app.get('/', async (req, res) => {
  const allPosts = await posts.find().toArray()
 res.send(allPosts)
})

