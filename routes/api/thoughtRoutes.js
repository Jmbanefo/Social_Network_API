const router = require('express').Router(); 

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
    .route('/:thoughtID')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought)

    router.route('/thoughtID/reactions').post(createReaction); 

    router.route('/:thoughtID/reactions/:reactionId').delete(removeReaction); 

module.exports = router; 
