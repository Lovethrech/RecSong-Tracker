console.log("Hello");


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use(cors());


app.post('/register', (req, res) => {
    res.send({
        messsage:'Your user was registered! Have fun!'
    })
})

app.listen(process.env.PORT || 5010, () => {
    console.log("Server is running on port 5010");
});