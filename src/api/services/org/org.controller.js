const httpStatus = require('http-status');
const service = require('./org.service');
const { handler: errorHandler } = require('../../middlewares/error');


/**
 * Get org list
 * @public
 */
exports.list = async (req, res, next) => {
  try {
    const response = await service.list(req.query);
    res.json(response);
  } catch (error) {
    next(error);
  }
};
