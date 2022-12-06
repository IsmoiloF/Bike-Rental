const Router = require('@koa/router')
const router = new Router();
const {
    addPenalty,
    getPenaltyById,
    getPenalty,
    updatePenalty,
    deletePenalty
} = require('../controller/penalty.controller')

router.get('/', getPenalty);

router.get('/:id', getPenaltyById);

router.post('/', addPenalty)

router.put('/:id', updatePenalty)

router.delete('/', deletePenalty)

module.exports=()=>router.routes();