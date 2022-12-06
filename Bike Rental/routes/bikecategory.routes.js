const Router = require('@koa/router')
const router = new Router();
const {
    addCateg,
    getCateg,
    getCategByID,
    updateCateg,
    deleteCateg
} = require('../controller/bike_category.controller')

router.get('/', getCateg);

router.get('/:id', getCategByID);

router.post('/', addCateg)

router.put('/:id', updateCateg)

router.delete('/', deleteCateg)

module.exports=()=>router.routes();