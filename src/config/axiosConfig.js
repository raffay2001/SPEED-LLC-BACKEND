const axios = require('axios');

const motorStateAPIInstance = axios.create({
  baseURL: process.env.MOTOR_STATE_BASE_URL,
  withCredentials: true,
});

const turnAPIInstance = axios.create({
  baseURL: process.env.TURN_14_BASE_URL,
  withCredentials: true,
});

module.exports = {
  motorStateAPIInstance,
  turnAPIInstance,
};
