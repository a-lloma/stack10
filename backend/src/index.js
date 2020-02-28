const express = require('express');
const mogoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();
mogoose.connect('mongodb+srv://loma:loma0603@cluster-dquhx.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());
app.use(routes);

app.listen(8080);