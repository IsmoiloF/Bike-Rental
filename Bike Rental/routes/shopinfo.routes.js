const Router = require('@koa/router')
const router = new Router();
const {
    addShopInfo,
    getShopInfoById,
    getShopInfo,
    updateShopinfo,
    deleteShopinfo
} = require('../controller/shopinfo.controller')

router.get('/', getShopInfo);

router.get('/:id', getShopInfoById);

router.post('/', addShopInfo)

router.put('/:id', updateShopinfo)

router.delete('/', deleteShopinfo)

module.exports=()=>router.routes();