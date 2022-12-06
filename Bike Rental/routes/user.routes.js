const Router = require('@koa/router')
const router = new Router();
const {
    addUser,
    getUserByID,
    getUser,
    updateUser,
    deleteUser
} = require('../controller/user.controller');


router.get('/' , getUser);

router.get('/:id', getUserByID);

router.post('/', addUser)

router.put('/:id', updateUser)

router.delete('/', deleteUser)

module.exports=()=>router.routes();