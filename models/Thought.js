const { Schema, model } = require('mongoose'); 
const schemaReaction = require('./Reaction'); 

const schemaThoughts = new Schema(
    { 
        thoughtText: { 
            type:String, 
            maxLength: 200, 
            minLength: 1, 
            required: true, 
        }, 
        createdAT: { 
            type: Date, 
            default: Date.now
        }, 
        reactions: [schemaReaction]
    }, 

    { 
        toJson: {virtuals: true,}, 
        id:false, 
    }    
); 

schemaThoughts
    .virtual('reactionCount')
    .get(function() {
        return this.reactions.length
    })

    const Thought = model('thought', schemaThoughts); 

    module.exports = Thought; 