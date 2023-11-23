const express = require('express');
const app = express();
const port=5000;
app.get('/', (req, res) => {
    res.send("<h1> home page </h1>");


    app.listen(port,()=>{
        console.log(`server started on port ${port}.` );

    })

});