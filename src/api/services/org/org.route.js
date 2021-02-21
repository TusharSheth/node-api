const express = require('express');
const validate = require('express-validation');
const controller = require('./org.controller');
const { authorize, ADMIN, LOGGED_USER } = require('../../middlewares/auth');

const router = express.Router();

router
  .route('/')
  .get(authorize(), controller.list)


module.exports = router;
