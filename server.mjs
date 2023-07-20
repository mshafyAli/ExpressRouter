import express from 'express'
import path from 'path'
const __dirname = path.resolve();


import apiv1Router from './apiv1/main.mjs'


// import authRouter from './apiv1/routes/auth.mjs'
// import commentRouter from './apiv1/routes/comment.mjs'
// import postRouter from './apiv1/routes/post.mjs'
// import feedRouter from './apiv1/routes/feed.mjs'


const app = express()

app.use(express.json()) //Body parser


// /api/v1/login
app.use(apiv1Router)


// pseudoCode
// app.use((res, req, next){
//   if(token == 'valid'){
//     next();
//   }else{
//     res.send(message);
//   }
// })





app.post("/api/v2/weather", (req, res, next) => {

  console.log("req.body: ", req.body);


  // res.send("weather is normal"); // not recommended



  res.send({
    message: "weather is normal",
    temp: 32,
    min: 20,
  });
})


app.post("/api/v1/weather", (req, res, next) => {

  console.log("req.body: ", req.body);


  // res.send("weather is normal"); // not recommended



  res.send({
    message: "weather is normal",
    temp: 32,
    min: 20,
  });
})







// app.use('./apiv1',apiv1Router)

// app.get('/profile', (req, res) => {
//   res.send('Hello World!')
// })

const port = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'public')))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


