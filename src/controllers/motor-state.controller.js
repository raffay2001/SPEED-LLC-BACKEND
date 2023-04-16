const catchAsync = require('../utils/catchAsync');
const { motorStateAPIInstance } = require('../config/axiosConfig');

const pingController = catchAsync(async (req, res) => {
  const response = await motorStateAPIInstance.request({
    url: 'Ping/API',
    method: 'GET',
    headers: {
      apiKey: process.env.MOTOR_STATE_API_KEY,
    },
  });
  console.log(response);
  res.json(response.data);
});

const getProductsController = catchAsync(async (req, res) => {
  const { PartNumbers } = req.query;
  const response = await motorStateAPIInstance.request({
    url: `Product?PartNumbers=${PartNumbers}`,
    method: 'GET',
    headers: {
      apiKey: process.env.MOTOR_STATE_API_KEY,
    },
  });
  res.json(response.data);
});

const getOrderingOptionsController = catchAsync(async (req, res) => {
  const response = await motorStateAPIInstance.request({
    url: `OrderOptions`,
    method: 'GET',
    headers: {
      apiKey: process.env.MOTOR_STATE_API_KEY,
    },
  });
  res.json(response.data);
});

module.exports = {
  pingController,
  getProductsController,
  getOrderingOptionsController,
};
