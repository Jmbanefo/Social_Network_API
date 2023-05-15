const { Schema, Types } = require ("mongoose"); 

const schemaReaction = new Schema( 
    {
        reactionId: { 
            type: Schema.Types.ObjectId, 
            default:() => new Types.ObjectId(), 
        }, 
        username: { 
            type: String, 
            required: true, 
        },
        reactionBody: { 
            type: String, 
            required: true, 
            maxlength:200
        }, 
        createdAt: { 
            type: Date, 
            default: Date.now, 
        }
    }, 
    {
        toJSON: { getters: true}, 
        id: false, 
    }
); 

module.exports = schemaReaction; 