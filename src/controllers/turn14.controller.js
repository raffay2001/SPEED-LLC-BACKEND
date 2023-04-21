const catchAsync = require('../utils/catchAsync');
const { turnAPIInstance } = require('../config/axiosConfig');

const getAccessToken = async (req, res) => {
  const response = await turnAPIInstance.request({
    url: 'token',
    method: 'POST',
    data: JSON.stringify({
      grant_type: process.env.TURN_14_GRANT_TYPE,
      client_id: process.env.TURN_14_CLIENT_ID,
      client_secret: process.env.TURN_14_CLIENT_SECRET,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data.access_token;
};

const tokenController = catchAsync(async (req, res) => {
  const response = await turnAPIInstance.request({
    url: 'token',
    method: 'POST',
    data: JSON.stringify({
      grant_type: process.env.TURN_14_GRANT_TYPE,
      client_id: process.env.TURN_14_CLIENT_ID,
      client_secret: process.env.TURN_14_CLIENT_SECRET,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  res.json(response.data);
});

const getAllBrandsController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: 'brands',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getBrandByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `brands/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getBrandPriceGroupController = catchAsync(async (req, res) => {
  const { brandId, pricegroupId } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `brands/${brandId}/pricegroup/${pricegroupId}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getCreditsController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: 'credits',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getCreditByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `credits/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getCreditByPurchaseOrderNumberController = catchAsync(async (req, res) => {
  const { purchaseOrderNumber } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `credits/po/${purchaseOrderNumber}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getDocumentsByIdController = catchAsync(async (req, res) => {
  const { quoteId } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `/documents/${quoteId}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getDocumentByPurchaseOrderNumberController = catchAsync(async (req, res) => {
  const { purchaseOrderNumber } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `documents/po/${purchaseOrderNumber}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

module.exports = {
  tokenController,
  getAllBrandsController,
  getBrandByIdController,
  getBrandPriceGroupController,
  getCreditsController,
  getCreditByIdController,
  getCreditByPurchaseOrderNumberController,
  getDocumentsByIdController,
  getDocumentByPurchaseOrderNumberController,
};
