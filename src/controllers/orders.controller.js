const Orders = require('../models/orders.model');
const catchAsync = require('../utils/catchAsync');

const placeOrder = catchAsync(async (req, res) => {
  const { products, status } = req.body;
  console.log(req.user);
  if (!req.user._id) {
    return res.json({ error: 'No user found' });
  }
  const user = req.user._id;
  const newOrder = await Orders.create({ products, status, user: user });

  res.json(newOrder);
});

const getOrderByID = catchAsync(async (req, res) => {
  if (!req.user._id) {
    return res.json({ error: 'No user found' });
  }
  console.log("sda")
  const userID = req.user._id;
  const orders = await Orders.find({user: userID})
  return res.json(orders)
});
const getAllOrders = catchAsync(async (req, res) => {
    const orders = await Orders.find()
    return res.json(orders)
  });
module.exports = {
  placeOrder,
  getAllOrders,
  getOrderByID
};
