const { Router } = require('express');

const routes = Router();

routes.post('/users', (request, response) => {
    console.log('teste body:', request.body)
    return response.json({ message: 'created User'});
});

module.exports = routes;