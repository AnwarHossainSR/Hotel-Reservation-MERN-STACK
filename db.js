const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://admin:admin@cluster0.tqnvn.mongodb.net/mern-shyroom'

mongoose.connect(mongoURL,{useUnifiedTopology: true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('connected', () => {
    console.log('MongoDB Connection Succeeded.')
})
connection.on('error', () => {
    console.log('Error in DB connection')
})

module.exports=mongoose






/* const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://admin:admin@cluster0.tqnvn.mongodb.net/mern-shyroom', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});

module.exports = mongoose
 */