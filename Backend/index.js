const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const mongoose = require('mongoose');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(cors());
const port = 3000;


//mongodb
mongoose.connect('mongodb+srv://mdeconozzama:NC7qFlCX5oHHrGcJ@ajdsiwipdhiph.ohx5p.mongodb.net/data?retryWrites=true&w=majority&appName=Cluster0',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
)

const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
    console.log('connceted to db');
})


const items = require('./routes/product.js')
app.use('/api/products',items);

const users = require('./routes/user.js')
app.use('/api/users',users);

const carts = require('./routes/cart.js')
app.use('/api/carts',carts);

const orders = require('./routes/order.js')
app.use('/api/order',orders);

app.use('/api/users/login', require('./Verification/Auth.js'));

const verify = require('./Verification/verifytoken.js');
app.use('/api/verifyToken', verify);

app.listen(port, () => console.log(`Server running on port ${port}`));
