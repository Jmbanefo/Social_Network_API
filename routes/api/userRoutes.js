const router = require ('express').Router(); 

const { 
    getAllUsers, 
    getUser, 
    newUser, 
    updateUser, 
    removeUser, 
    removeFriend, 
    addFriend,
}  = require('../../controllers/userController');

router.route('/').get(getAllUsers).post(newUser); 

router.route('/userID').get(getUser).put(updateUser).delete(removeUser)

router.route('/userId/friends/:friendID').post(addFriend).delete(removeFriend); 

module.exports = router; 