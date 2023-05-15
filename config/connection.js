const { connect, connection } = require ('mongoose'); 

connect('mongod://127.0.0.1:27017/socialNetworkApp', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}); 

module.exports = connection; 