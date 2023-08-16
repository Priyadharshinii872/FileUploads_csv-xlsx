const app = require('express')()

require('dotenv').config()
require('./config/db')

const port = 9000;


app.listen(port,()=>
{
    console.log(`the server is listening to the port:${port}`);
})