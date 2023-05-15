const mongoose = require("mongoose"); 

const newSchema = new Schema(
    { 
        username: { type: String, trim: true, unique: true, required: true}, 
        email: { 
            type:String,
            unique: true, 
            required: true, 
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                }, 
                message: "You must enter a valid email"
            }, 
            required: [true, "An email is required to continue"]
        }, 
        thoughts: [
            {
                type: Schema.Types.ObjectId, 
                ref: "Thought", 
            },
        ], 
        
        friends: [
            {
                type: Schema.Types.ObjectId, 
                ref: "User", 
            }
        ],
    }, 
    {
        toJson: {virtuals: true},
        id:false, 
    }
);

    userSchema
        .virtual('friendCount')
        .get(function() { 
            return this.friends.length; 
        })

        
        const User = model("User",userSchema); 

        module.exports = User; 
