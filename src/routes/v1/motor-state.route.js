const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const motorStateController = require('../../controllers/motor-state.controller');

const router = express.Router();

router.route('/ping').get(auth('forUser'), motorStateController.pingController);
router.route('/products').get(auth('forUser'), motorStateController.getProductsController);
router.route('/ordering-options').get(auth('forUser'), motorStateController.getOrderingOptionsController);

module.exports = router;
