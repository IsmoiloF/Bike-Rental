const Router = require('@koa/router')
const router = new Router();
const {
    addClient,
    getClient,
    getClientByID,
    updateClient,
    deleteClient
} = require('../controller/client.controller')

router.get('/', getClient);

router.get('/:id', getClientByID);

router.post('/', addClient)

router.put('/:id', updateClient)

router.delete('/', deleteClient)

module.exports=()=>router.routes();