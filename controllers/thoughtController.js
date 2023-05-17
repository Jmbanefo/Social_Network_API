const { Thought, User } = require('../models'); 

module.exports = { 
    getAllThoughts: async (req, res) => { 
        Thought.find()
        
        .then((thoughts) => res.json(thoughts))
        .catch((error) => res.status(500).json(error))
    }, 
    
    getThought(req, res) { 
        Thought.findOne({ _id: req.params.thoughtID})
        
        .then((thought) =>
        !thought
        ? res.status(404).json({message: "No thought with that particular ID"})
        :res.json(thought)
        )
        .catch((error) => res.status(500).json (error)); 
    },
    
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtID }, 
            { $set:req.body }, 
            {
                runValidators: true,
                new: true}
                
                
                )
                .then((thought) => 
                !thought
                ?res.status(404).json({message: "There is no thought with this ID"})
                :res.json(thought)
                )
                .catch((error) => { 
                    res.status(500).json(error)
                    console.log(error)
                })
            },
            
            newThought(req, res) { 
                Thought.create(req.body)
                
                .then((thought) => { 
                    return User.findOneAndUpdate(
                        {_id: req.body.userId}, 
                        {$addToset: { thougts: thought._id}}, 
                        {new: true}
                        )
                    })
                    .then((user) => 
                    !user
                    ?res.status(404).json({ 
                        message: "Thought created, but there is no user with that ID", 
                    })
                    :res.json("Thought successfully created"))
                    
                    .catch((error) => { 
                        console.log(error); 
                        res.status(500).json(error); 
                    })
                    
                },
                
                deleteThought: async (req, res) => { 
                    try{ 
                        await Thought.findbyIdAndDelete(req.params,thoughtID); 
                        res.json({message: "Thought has been successfully deleted"}); 
                        
                    }
                    catch(error) { 
                        res.status(500).json(error); 
                    }
                },
                
                createReaction: async (res, req) => { 
                    try { 
                        const findThought = await Thought.findOneAndUpdate(
                            req.params.thoughtID, 
                            {$addToset: {reaction: req.body}}, 
                            { new: true }
                            )
                            res.status(201).json(updateThougth); 
                        }
                        catch (error) { 
                            res.status(500).json(error); 
                        }
                    },
                    
                    removeReaction: async (res, reo) => { 
                        try{ 
                            const findThought = await Thought.findOneAndUpdate( 
                                req.params.thoughtID, 
                                { $pull: { reactions: { reactionId: req.params.reactionId}}}, 
                                { runValidators: true, new: true } 
                                )
                                .then((thought) => 
                                !thought
                                ?res.status(404).json({ message: "There is not thought with this ID"})
                                :res.json(thought)
                                )
                                
                            } 
                            catch(error) {res.status(500).json(error)}
                        }
        }