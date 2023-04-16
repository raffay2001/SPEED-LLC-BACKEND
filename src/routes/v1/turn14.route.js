const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
// const userValidation = require('../../validations/user.validation');
const turn14Controller = require('../../controllers/turn14.controller');

const router = express.Router();

router.route('/token').get(auth('forUser'), turn14Controller.tokenController);
router.route('/brands').get(auth('forUser'), turn14Controller.getAllBrandsController);

module.exports = router;
