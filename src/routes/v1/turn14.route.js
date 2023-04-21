const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const turn14Controller = require('../../controllers/turn14.controller');

const router = express.Router();

router.route('/token').get(auth('forUser'), turn14Controller.tokenController);
router.route('/brands').get(auth('forUser'), turn14Controller.getAllBrandsController);
router.route('/brands/:id').get(auth('forUser'), turn14Controller.getBrandByIdController);
router
  .route('/brands/:brandId/pricegroup/:pricegroupId')
  .get(auth('forUser'), turn14Controller.getBrandPriceGroupController);
router.route('/credits').get(auth('forUser'), turn14Controller.getCreditsController);
router.route('/credits/:id').get(auth('forUser'), turn14Controller.getCreditByIdController);
router
  .route('/credits/po/:purchaseOrderNumber')
  .get(auth('forUser'), turn14Controller.getCreditByPurchaseOrderNumberController);
router.route('/documents/:quoteId').get(auth('forUser'), turn14Controller.getDocumentsByIdController);
router
  .route('/documents/po/:purchaseOrderNumber')
  .get(auth('forUser'), turn14Controller.getDocumentByPurchaseOrderNumberController);

module.exports = router;
