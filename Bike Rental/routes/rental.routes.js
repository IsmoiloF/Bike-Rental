const Router = require('@koa/router')
const router = new Router();
const {
    addRental,
    getRentals,
    getRentalByID,
    updateRental,
    deleteRental
} = require('../controller/rental.controller')

router.get('/', getRentals);

router.get('/:id', getRentalByID);

router.post('/', addRental)

router.put('/:id', updateRental)

router.delete('/', deleteRental)

module.exports=()=>router.routes();