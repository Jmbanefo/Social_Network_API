const { getAllThoughts } = require("../controllers/thoughtController");

const names = [ 
    'Albert', 
    'Bobby', 
    'Chris',
    'Dave', 
    'Edward', 
    'Frank', 
    'George',
    'Hector', 
    'Iggy', 
    'Justin', 
    'Karen', 
    'Lance', 
    'Mbanefo', 
    'Oscar', 
      
]

const randomArray = (array) => array[Math.floor(Math.random() * array.length)];

const randomName = () => `${randomArray(names)} ${randomArray(names)}`; 

const randomUsername = () => `${randomArray(names)}${Math.floor(Math.random() * 10 + 1)}`

function randomEmail (domain, length)
{ 
    let txt = ""; 
    let options = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; 

        for(var i=0; i < length; i++) { 
            txt += options.charAt(Math.floor(Math.random() * possible.length)); 

            return txt + domain
        }
}

const randomThought = () => `${randomArray(thoughts)}`; 

module.exports = { 
    randomName, 
    randomUsername, 
    randomEmail

}