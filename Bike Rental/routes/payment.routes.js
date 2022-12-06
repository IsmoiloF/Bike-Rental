const Router = require('@koa/router')
const router = new Router();
const {
    addPayment,
    getPayment,
    getPaymentById,
    updatePayment,
    deletePayment
} = require('../controller/payment.controller')

router.get('/', getPayment);

router.get('/:id', getPaymentById);

router.post('/', addPayment)

router.put('/:id', updatePayment)

router.delete('/', deletePayment)

module.exports=()=>router.routes();