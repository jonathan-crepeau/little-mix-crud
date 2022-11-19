const mongoose = require('mongoose');
const URI = "mongodb+srv://jonathan-crepeau:my-password@mixercluster0.dudpteb.mongodb.net/mixers?retryWrites=true&w=majority";

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Initial DB connection successful..'))
    .catch((error) => console.log(error));

module.exports = {
    Singer: require('./Singer')
};