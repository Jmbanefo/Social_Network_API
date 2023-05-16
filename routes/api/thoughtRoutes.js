const router = require('express').Router; 

const {
    getAllThoughts,
    getThought,
    updateThought,
    newThought,
    deleteThought,
    createReaction, 
    removeReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(newThought)

router
    .route('/:thoughtId')
    .get('/getThought')
    .put('/updateThought')
    .delete('/deleteThought')

    router.route('/thoughtId/reactions').post(createReaction); 

    router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction); 

module.exports = router; 
