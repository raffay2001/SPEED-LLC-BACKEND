const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const motorStateRoute = require('./motor-state.route');
const turn14Route = require('./turn14.route');
const meyerRoute = require('./meyer.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/motor-state',
    route: motorStateRoute,
  },
  {
    path: '/turn14',
    route: turn14Route,
  },
  {
    path: '/meyer',
    route: meyerRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
