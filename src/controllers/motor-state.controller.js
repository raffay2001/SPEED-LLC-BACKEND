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

const getShippingEstimateController = catchAsync(async (req, res) => {
  const response = await motorStateAPIInstance.request({
    url: `ShippingEstimate`,
    method: 'POST',
    data: req.body,
    headers: {
      apiKey: process.env.MOTOR_STATE_API_KEY,
    },
  });
  res.json(response.data);
});

const getOrderInquiryController = catchAsync(async (req, res) => {
  const response = await motorStateAPIInstance.request({
    url: `OrderInquiry`,
    method: 'POST',
    data: req.body,
    headers: {
      apiKey: process.env.MOTOR_STATE_API_KEY,
    },
  });
  res.json(response.data);
});

const getOrdersController = catchAsync(async (req, res) => {
  const { orderNumbers } = req.query;
  const response = await motorStateAPIInstance.request({
    url: `Order?orderNumbers=${orderNumbers}`,
    method: 'GET',
    headers: {
      apiKey: process.env.MOTOR_STATE_API_KEY,
    },
  });
  res.json(response.data);
});

const makeOrderController = catchAsync(async (req, res) => {
  const response = await motorStateAPIInstance.request({
    url: `Order`,
    method: 'POST',
    data: req.body,
    headers: {
      apiKey: process.env.MOTOR_STATE_API_KEY,
    },
  });
  res.json(response.data);
});

const getBrandsController = catchAsync(async (req, res) => {
  const response = await motorStateAPIInstance.request({
    url: `Brands`,
    method: 'GET',
    headers: {
      apiKey: process.env.MOTOR_STATE_API_KEY,
    },
  });
  res.json(response.data);
});

const getAccountSummaryController = catchAsync(async (req, res) => {
  const response = await motorStateAPIInstance.request({
    url: `AccountSummary`,
    method: 'GET',
    headers: {
      apiKey: process.env.MOTOR_STATE_API_KEY,
    },
  });
  res.json(response.data);
});

const getRetailMarketPlaceStatusController = catchAsync(async (req, res) => {
  const response = await motorStateAPIInstance.request({
    url: `RetailMarketPlaceEnabled`,
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
  getShippingEstimateController,
  getOrderInquiryController,
  makeOrderController,
  getOrdersController,
  getBrandsController,
  getAccountSummaryController,
  getRetailMarketPlaceStatusController,
};
