const mongoose = require('mongoose');
const orders = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    products: {
        type: Array, 
        required: true
    },
    status: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);
const Orders = mongoose.model('Orders', orders);

module.exports = Orders;
