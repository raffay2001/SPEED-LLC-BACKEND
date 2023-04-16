const catchAsync = require('../utils/catchAsync');
const { turnAPIInstance } = require('../config/axiosConfig');

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
  const response = await turnAPIInstance.request({
    url: 'brands',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.TURN_14_ACCESS_TOKEN}`,
    },
  });
  res.json(response.data);
});

module.exports = {
  tokenController,
  getAllBrandsController,
};
