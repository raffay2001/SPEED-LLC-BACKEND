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
  const { start_date, end_date } = req.query;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `credits?start_date=${start_date}&end_date=${end_date}`,
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
    url: `inventory/brand/${brandId}/pricegroup/${pricegroupId}?page=${page}`,
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
  const { start_date, end_date } = req.query;
  const response = await turnAPIInstance.request({
    url: `invoices?start_date=${start_date}&end_date=${end_date}`,
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

const getAllItemsController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const { page } = req.query;
  const response = await turnAPIInstance.request({
    url: `items?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data)
  res.json(response.data);
});

const getItemByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `items/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllItemsForBrandController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const { page } = req.query;
  const { brandId } = req.params;
  const response = await turnAPIInstance.request({
    url: `items/brand/${brandId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getPriceGroupItemForABrandController = catchAsync(async (req, res) => {
  const { page } = req.query;
  const { brandId, pricegroupId } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `items/brand/${brandId}/pricegroup/${pricegroupId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getUpdatedItemController = catchAsync(async (req, res) => {
  const { page, days } = req.query;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `items/updates?page=${page}&days=${days}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllItemDataController = catchAsync(async (req, res) => {
  const { page } = req.query;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `items/data?page==${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllItemDataByIdController = catchAsync(async (req, res) => {
  const { itemId } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `items/data/${itemId}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllItemDataForABrandController = catchAsync(async (req, res) => {
  const { page } = req.query;
  const { brandId } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `items/data/brand/${brandId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getPriceGroupAllItemDataForABrandController = catchAsync(async (req, res) => {
  const { page } = req.query;
  const { brandId, pricegroupId } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `items/data/brand/${brandId}/pricegroup/${pricegroupId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllItemFitmentDataController = catchAsync(async (req, res) => {
  const { page } = req.query;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `items/fitment?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllItemFitmentDataForABrandController = catchAsync(async (req, res) => {
  const { page } = req.query;
  const { brandId } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `items/fitment/brand/${brandId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllItemFitmentDataForABrandPriceGroupController = catchAsync(async (req, res) => {
  const { page } = req.query;
  const { brandId, pricegroupId } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `items/fitment/brand/${brandId}/pricegroup/${pricegroupId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllItemFitmentDataByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `items/fitment/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllLocationsController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: 'locations',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllOrdersController = catchAsync(async (req, res) => {
  const { start_date, end_date } = req.query;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `orders?start_date=${start_date}&end_date=${end_date}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getOrderByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `orders/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getOrderByPurchaseOrderNumberController = catchAsync(async (req, res) => {
  const { purchaseOrderNumber } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `orders/po/${purchaseOrderNumber}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllPaymentsController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const { start_date, end_date } = req.query;
  const response = await turnAPIInstance.request({
    url: `payments?start_date=${start_date}&end_date=${end_date}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getPaymentByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `payments/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getPaymentByInvoiceController = catchAsync(async (req, res) => {
  const { invoiceId } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `payments/invoice/${invoiceId}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllPricingController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const { page } = req.query;
  const response = await turnAPIInstance.request({
    url: `pricing?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getPricingByIdController = catchAsync(async (req, res) => {
  const { id } = req.params;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `pricing/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getPricingChangesController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const { start_date, end_date } = req.query;
  const response = await turnAPIInstance.request({
    url: `pricing/changes?start_date=${start_date}&end_date=${end_date}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getPricingByBrandController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const { brandId } = req.params;
  const { page } = req.query;
  const response = await turnAPIInstance.request({
    url: `pricing/brand/${brandId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllPriceGroupPricingForABrandController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const { brandId, pricegroupId } = req.params;
  const { page } = req.query;
  const response = await turnAPIInstance.request({
    url: `pricing/brand/${brandId}/pricegroup/${pricegroupId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const createQuoteController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `quote`,
    method: 'POST',
    data: req.body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const createOrderController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `order`,
    method: 'POST',
    data: req.body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const createOrderFromQuoteController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `order/from_quote`,
    method: 'POST',
    data: req.body,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllShippingController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: 'shipping',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllEstimatedShippingController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: 'shipping/item_estimation',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getEstimatedShippingByIdController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const { id } = req.params;
  const response = await turnAPIInstance.request({
    url: `shipping/item_estimation/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getEstimatedShippingByBrandController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const { brandId } = req.params;
  const { page } = req.query;
  const response = await turnAPIInstance.request({
    url: `shipping/item_estimation/brand/${brandId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllPriceGroupEstimatedShippingRateForABrandController = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const { brandId, pricegroupId } = req.params;
  const { page } = req.query;
  const response = await turnAPIInstance.request({
    url: `shipping/item_estimation/brand/${brandId}/pricegroup/${pricegroupId}?page=${page}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getAllTrackingsController = catchAsync(async (req, res) => {
  const { start_date, end_date } = req.query;
  const accessToken = await getAccessToken();
  const response = await turnAPIInstance.request({
    url: `tracking?start_date=${start_date}&end_date=${end_date}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.json(response.data);
});

const getTrackingsByPacakageDetailsController = catchAsync(async (req, res) => {
  const { start_date, end_date, tracking_number, id } = req.query;
  const accessToken = await getAccessToken();
  const url = tracking_number
    ? `tracking/package_details?tracking_number=${tracking_number}`
    : id
    ? `tracking/package_details?id=${id}`
    : `tracking/package_details?start_date=${start_date}&end_date=${end_date}`;
  const response = await turnAPIInstance.request({
    url: url,
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
  getAllItemsController,
  getItemByIdController,
  getAllItemsForBrandController,
  getPriceGroupItemForABrandController,
  getUpdatedItemController,
  getAllItemDataController,
  getAllItemDataByIdController,
  getAllItemDataForABrandController,
  getPriceGroupAllItemDataForABrandController,
  getAllItemFitmentDataController,
  getAllItemFitmentDataForABrandController,
  getAllItemFitmentDataForABrandPriceGroupController,
  getAllItemFitmentDataByIdController,
  getAllLocationsController,
  getAllOrdersController,
  getOrderByIdController,
  getOrderByPurchaseOrderNumberController,
  getAllPaymentsController,
  getPaymentByIdController,
  getPaymentByInvoiceController,
  getAllPricingController,
  getPricingByIdController,
  getPricingChangesController,
  getPricingByBrandController,
  getAllPriceGroupPricingForABrandController,
  createQuoteController,
  createOrderController,
  createOrderFromQuoteController,
  getAllShippingController,
  getAllEstimatedShippingController,
  getEstimatedShippingByIdController,
  getEstimatedShippingByBrandController,
  getAllPriceGroupEstimatedShippingRateForABrandController,
  getAllTrackingsController,
  getTrackingsByPacakageDetailsController,
};
