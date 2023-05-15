const { Thought, User } = require('../models'); 

module.exports = { 
    getAllUsers(req, res) { 
        User.find()
        .then((users) => res.json(users))
        .catch((error) => res.status(500).json(error))
    }, 

    getUser(req, res) { 
        User.findOne({ _id: req.params.userID})
        .then((user) => 
            !user
            ?res.status(400).json({ message: "There is no user with that ID"})
            :res.json(user)
            )
        .catch((error) => res.status(500).json(error))
    }, 

    newUser(req, res) { 
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((error) => res.status(500).json(error))
    }, 

    updateUser(req, res) { 
        User.findOneandUpdate({ _id: req.params.userID}, {$set: req.body}, { runValidators: true, new: true})
        .then((user) => 
        !user
            ?res.status(400).json({ message: "There is no user with that ID"})
            :res.json(user)
            )
        .catch((error) => res.status(500).json(error))
    }, 

    removeUser: async (req, res) => { 
        try{ 
            const removeUser = await User.findOneandUpdate(req.params.userID)
            if(!removeUser) { 
                return res.status(400).json({ message: "There is no user with this ID"})
            }
            res.json({ message: "This user was successfully deleted"})
            
        }catch (error) { 
            res.status(500).json(error)
        }
    },   
    removeFriend: async (req, res) => { 
        try { 
            const selectUser = await User.findOneandUpdate(
                {_id: req.params.userID}, 
                {$pull: {friends: req.params.friendId}}, 
                {new: true}

                )
            if(!selectUser) { 
                return res.status(400).json({ message: "There is no user with this ID"})
            }
            res.json({ message: "This friend was successfully deleted"})
        }catch(error){ 
            res.status(500).json(error)
        }
    }, 

    addFriend: async (req, res) => { 
        try{ 
            const selectUser = await User.findOneandUpdate(
                { _id: req.params.userID}, 
                { $addToSet: {friends: req.params.friendId} }, 
                {new: true}
            )
            if(!selectUser) { 
                return res.status(404).json({ message: "There is no user with this ID"})
            }
            res.json({ message: "Friend successfully added"})
        }catch (error) { 
            res.status(500).json(error)
        } 
    }
    
}
