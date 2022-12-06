const Router = require('@koa/router')
const router = new Router();
const {
    deleteInfo,
    addInfo,
    getInfo,
    getInfoByID,
    updateInfo
} = require('../controller/bike_info.controller')

router.get('/', getInfo);

router.get('/:id', getInfoByID);

router.post('/', addInfo)

router.put('/:id', updateInfo)

router.delete('/', deleteInfo)

module.exports=()=>router.routes();