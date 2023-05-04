const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const meyerController = require('../../controllers/meyer.controller');

const router = express.Router();

router.route('/token').get( meyerController.getAccessToken);
router.route('/countries').get(auth('forUser'), meyerController.getCountries);
router.route('/accountInformation').get(auth('forUser'), meyerController.getAccountInformation);
router.route('/accountAddresses').get(auth('forUser'), meyerController.getAccountAddresses);
router.route('/itemInformation').get(auth('forUser'), meyerController.getItemInformation);
router.route('/salesCurrent').get(auth('forUser'), meyerController.getSalesCurrent);
router.route('/salesHistory').get(auth('forUser'), meyerController.getSalesCurrent);
router.route('/salesOrderDetail').get(auth('forUser'), meyerController.getSalesOrderDetail);
router.route('/getInvoice').get(auth('forUser'), meyerController.getInvoice);
router.route('/salesTracking').get(auth('forUser'), meyerController.getSalesTracking);
router.route('/shipMethod').get(auth('forUser'), meyerController.getShipMetods);
router.route('/getWarehouse').get(auth('forUser'), meyerController.getWarehouses);
router.route('/getShippingRateQuote').get(auth('forUser'), meyerController.getShippingRateQuote);
router.route('/getManafacturer').get(auth('forUser'), meyerController.getManafacturers);
router.route('/getManafacturerInventory').get(auth('forUser'), meyerController.getManafacturerInvetory);
router.route('/salesOrderCreation').post(auth('forUser'), meyerController.getSalesOrderCreation);
router.route('/cancelOrder').delete(auth('forUser'), meyerController.cancelOrder);





module.exports = router;
