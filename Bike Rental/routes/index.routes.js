const Router = require('@koa/router')
const router = new Router();


const userRouter = require('./user.routes')
const userGroupRouter = require('./usergroup.routes')
const clientRouter = require('./client.routes')
const shopInfoRouter = require('./shopinfo.routes')
const rentalRouter = require('./rental.routes')
const penaltyRouter = require('./penalty.routes')
const paymentRouter = require('./payment.routes')
const bikeInfoRouter = require('./bikeinfo.routes')
const bikeCategoryRouter = require('./bikecategory.routes')
const adsmanagementRouter = require('./adsmangment.routes')




router.use('/api/user', userRouter())
router.use('/api/usergroup', userGroupRouter())
router.use('/api/client', clientRouter())
router.use('/api/shopinfo', shopInfoRouter())
router.use('/api/rental', rentalRouter())
router.use('/api/penalty', penaltyRouter())
router.use('/api/payment', paymentRouter())
router.use('/api/bikeinfo', bikeInfoRouter())
router.use('/api/bikecategory', bikeCategoryRouter())
router.use('/api/adsmanagement', adsmanagementRouter())











module.exports=router.routes()