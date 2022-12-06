const Router = require('@koa/router')
const router = new Router();
const {
    addUserGroup,
    getUserGroups,
    getUserGroupByID,
    updateUserGroup,
    deleteUserGroup
} = require('../controller/usergroup.controller')

router.get('/', getUserGroups);

router.get('/:id', getUserGroupByID);

router.post('/', addUserGroup)

router.put('/:id', updateUserGroup)

router.delete('/', deleteUserGroup)

module.exports=()=>router.routes();