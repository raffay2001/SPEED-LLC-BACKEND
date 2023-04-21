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

const getDropshipByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `dropship/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllInventoryController = catchAsync(async (req, res) => {
  const { page } = req.query;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `inventory?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getInventoryByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `inventory/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getBrandInventoryController = catchAsync(async (req, res) => {
  const { page } = req.query;
  const { brandId } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `inventory/brand/${brandId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getPriceGroupInventoryForABrandController = catchAsync(async (req, res) => {
  const { page } = req.query;
  const { brandId, pricegroupId } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `/v1/inventory/brand/${brandId}/pricegroup/${pricegroupId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getUpdatedInventoryController = catchAsync(async (req, res) => {
  const { page, minutes } = req.query;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `inventory/updates?page=${page}&minutes=${minutes}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllInvoicesController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: 'invoices',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getInvoiceByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `invoices/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getInvoiceByPurchaseOrderNumberController = catchAsync(async (req, res) => {
  const { purchaseOrderNumber } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `invoices/po/${purchaseOrderNumber}`,
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
  getDropshipByIdController,
  getAllInventoryController,
  getInventoryByIdController,
  getBrandInventoryController,
  getPriceGroupInventoryForABrandController,
  getUpdatedInventoryController,
  getAllInvoicesController,
  getInvoiceByIdController,
  getInvoiceByPurchaseOrderNumberController,
};
