const {Router} = require('express');
const router = Router();

const { getUser, CreateUser, getUsers, UpdateUser, DeleteUser } = require('../controllers/UserController');

router.route('/')  
            .get(getUser)
            .post(CreateUser)
    
router.route('/:id')
            .get(getUsers)
            .put(UpdateUser)
            .delete(DeleteUser)

module.exports = router;