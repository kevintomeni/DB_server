// require express
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv/config')

// declaration constante port
const app = express();
const env = process.env;

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors())
app.options('*', cors())


// https:shop778.com/products/1
const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products')

app.use(authRouter)

app.use('/products',productsRouter)



app.get('/',(req,res)=>{
    return res.status(404).send('sorry, can not find that')
})

app.delete('/watch/videos/:id',(request, response)=>{
return response.json({videoId: request.params.id})
})

//start server
//localhost >> 8.8.8.8
// const hostname = env.HOSTNAME;
const port = env.PORT;

mongoose.connect(env.MONGOBD_CONNECTION_STRING).then(()=>{
    console.log('connection to database')
}).catch((error)=>{
    console.error(error)
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});

// C R U D

//CREATE THE DATA
// app.post('/register')
//READ THE DATA
// app.get('/')
//UDAPTE THE DATA
// app.put('')
//DELETE THE DATA
// app.delete('')

