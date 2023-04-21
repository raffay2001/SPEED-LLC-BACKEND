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
router.route('/dropship/:id').get(auth('forUser'), turn14Controller.getDropshipByIdController);
router.route('/inventory').get(auth('forUser'), turn14Controller.getAllInventoryController);
router.route('/inventory/:id').get(auth('forUser'), turn14Controller.getInventoryByIdController);
router.route('/inventory/brand/:brandId').get(auth('forUser'), turn14Controller.getBrandInventoryController);
router
  .route('/inventory/brand/:brandId/pricegroup/:pricegroupId')
  .get(auth('forUser'), turn14Controller.getPriceGroupInventoryForABrandController);
router.route('/inventory/updates').get(auth('forUser'), turn14Controller.getUpdatedInventoryController);
router.route('/invoices').get(auth('forUser'), turn14Controller.getAllInvoicesController);
router.route('/invoices/:id').get(auth('forUser'), turn14Controller.getInvoiceByIdController);
router
  .route('/invoices/po/:purchaseOrderNumber')
  .get(auth('forUser'), turn14Controller.getInvoiceByPurchaseOrderNumberController);

module.exports = router;
