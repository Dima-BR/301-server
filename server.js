'use strict';
const express= require('express');
const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static('./public'));
server.listen(PORT,()=>
{
    console.log('listening on port ',PORT);
});

// http://localhost:3000/test
server.get('/test',(request,response)=>{
    response.send('I did it ')
});