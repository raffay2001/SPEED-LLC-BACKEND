const express = require('express');
const auth = require('../../middlewares/auth');
// const userValidation = require('../../validations/user.validation');
const motorStateController = require('../../controllers/motor-state.controller');

const router = express.Router();

router.route('/ping').get(auth('forUser'), motorStateController.pingController);
router.route('/products').get(auth('forUser'), motorStateController.getProductsController);
router.route('/ordering-options').get(auth('forUser'), motorStateController.getOrderingOptionsController);
router.route('/shipping-estimate').post(auth('forUser'), motorStateController.getShippingEstimateController);
router.route('/order-inquiry').post(auth('forUser'), motorStateController.getOrderInquiryController);
router
  .route('/order')
  .get(auth('forUser'), motorStateController.getOrdersController)
  .post(auth('forUser'), motorStateController.makeOrderController);
router.route('/brands').get(auth('forUser'), motorStateController.getBrandsController);
router.route('/account-summary').get(auth('forUser'), motorStateController.getAccountSummaryController);
router
  .route('/check-retail-marketplace-status')
  .get(auth('forUser'), motorStateController.getRetailMarketPlaceStatusController);

module.exports = router;
