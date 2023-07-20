
import express from 'express'
let router = express.Router()

router.get('/login', (req, res) => {
    console.log('this is login', new Date());
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Login</title>
    </head>
    <body>
        <h1>Welcome to login page</h1>
    </body>
    </html>`);
  })
  
  
  router.get('/api/v1/signup', (req, res) => {
    console.log('this is SignUp !', new Date());
    res.send('this is SignUp' + new Date());
  })

  export default router

// import express from 'express'
// let router = express.Router()


// router.get('/login', (req, res, nextt)=>{
//     console.log("login");
//     res.send("hello world");
// })
