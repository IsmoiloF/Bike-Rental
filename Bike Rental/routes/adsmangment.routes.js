const Router = require('@koa/router')
const router = new Router();
const {
    addAdsManagement,
    getAdsManagements,
    getAdsManagementByID,
    updateAdsManagement,
    deleteAdsManagement
} = require('../controller/adsmangment.controller')



router.get('/', getAdsManagements);

router.get('/:id', getAdsManagementByID);

router.post('/', addAdsManagement)

router.put('/:id', updateAdsManagement)

router.delete('/', deleteAdsManagement)

module.exports=()=>router.routes();