const express = require('express');   
const app = express();

const mongoose = require('mongoose');
const port = 4000;
const dotenv = require('dotenv');
const userName = "rohitchornele"
const password = "Rohit%401997"

dotenv.config();

mongoose.connect(`mongodb+srv://${userName}:${password}@movie-cluster.gz73r5r.mongodb.net/`
).then(()=>
    app.listen(port, () =>
        console.log(`Server is running on ${port}`)
    )
).catch(err => console.log(err))