const catchAsync = require('../utils/catchAsync');
const { meyerAPIInstance } = require('../config/axiosConfig');

const getAccessToken = catchAsync(async (req, res) => {
  const response = await meyerAPIInstance.request({
    url: 'Authentication',
    method: 'POST',
    data: JSON.stringify({
      username: process.env.MEYER_USERNAME,
      password: process.env.MEYER_PASSWORD,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log(response.data);
  return response.data.access_token;
});

const getCountries = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: 'Countries',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getAccountAddresses = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: 'AccountAddresses',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getAccountInformation = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: 'AccountInformation',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getItemInformation = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const { itemNumber } = req.query;
  const response = await meyerAPIInstance.request({
    url: `AccountAddresses?ItemNumber=${itemNumber}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getSalesCurrent = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: 'SalesCurrent',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getSalesHistory = catchAsync(async (req, res) => {
  const { start_date, end_date } = req.query;
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: `SalesHistory?StartDate=${start_date}&EndDate=${end_date}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getSalesOrderDetail = catchAsync(async (req, res) => {
  const { orderNumber } = req.query;
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: `SalesOrderDetail?OrderNumber=${orderNumber}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getInvoice = catchAsync(async (req, res) => {
  const { orderNumber } = req.query;
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: `Invoice?OrderNumber=${orderNumber}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getSalesTracking = catchAsync(async (req, res) => {
  const { orderNumber } = req.query;
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: `SalesTracking?OrderNumber=${orderNumber}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getShipMetods = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: `ShipMethods`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getWarehouses = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: `Warehouses`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getShippingRateQuote = catchAsync(async (req, res) => {
  const { ItemNumber, Quantity, Residential, ShipToCountry, ShipToZipCode } = req.query;
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: `ShippingRateQuote?ItemNumber=${ItemNumber}&Quantity=${Quantity}&Residential=${Residential}&ShipToCountry=${ShipToCountry}&ShipToZipCode=${ShipToZipCode}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getManafacturers = catchAsync(async (req, res) => {
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: `Manufacturers`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getManafacturerInvetory = catchAsync(async (req, res) => {
  const { manufacturerID, price } = req.query;
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: `ManufacturerInventory?ManufacturerID=${manufacturerID}&Price=${price} `,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});

const getSalesOrderCreation = catchAsync(async (req, res) => {
  const { Consolidate } = req.query;
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: `CreateOrder?Consolidate=${Consolidate}`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    data: req.body,
  });
  console.log(response.data);
  res.json(response.data);
});

const cancelOrder = catchAsync(async (req, res) => {
  const { orderNumber } = req.query;
  const accessToken = await getAccessToken();
  const response = await meyerAPIInstance.request({
    url: `CancelOrder?OrderNumber=${orderNumber}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  console.log(response.data);
  res.json(response.data);
});
module.exports = {
  getAccessToken,
  getManafacturerInvetory,
  getSalesOrderCreation,
  cancelOrder,
  getCountries,
  getWarehouses,
  getAccountAddresses,
  getAccountInformation,
  getSalesCurrent,
  getSalesHistory,
  getItemInformation,
  getSalesOrderDetail,
  getSalesTracking,
  getInvoice,
  getShipMetods,
  getShippingRateQuote,
  getManafacturers,
};
