const mogoose = require('mongoose');
const PointSchema = require('./utils/PointSchemas');

const DevSchema = new mogoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
})

module.exports = mogoose.model('Dev', DevSchema);