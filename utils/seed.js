const e = require('express');
const connection = require('../config/connection'); 
const User = require('../models/User'); 
const { randomUsername, randomEmail } = require('./data'); 

console.time('currently seeding...'); 

connection.once('open', async () => { 
    await User.deleteMany({}); 

    const users = []; 

        for(let index = 0; index < 10; index++){ 

            const username = randomUsername(); 
            const email = randomEmail("@gmail.com", 8); 
            const genUser = { 
                username: username, 
                email: email, 
            }; 
            users.push(genUser); 
        }
        await User.collection.insertMany(users)

        console.table(users); 
        console.timeEnd('seeds planted!'); 
        process.exit(0); 
}); 