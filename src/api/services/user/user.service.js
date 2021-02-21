const { omit } = require('lodash');
const User = require('./user.model');
// const { handler: errorHandler } = require('../../middlewares/error');

/**
 * Load user and append to req.
 * @public
 */
// exports.load = async (req, res, next, id) => {
// try {
//   console.log(12);
//   const user = await User.get(id);
//   req.locals = { user };
//   return next();
// } catch (error) {
//   return errorHandler(error, req, res);
// }
// };

/**
 * Get user
 * @public
 */
exports.get = async id => User.get(id);

/**
 * Get logged in user info
 * @public
 */
exports.loggedIn = (req, res) => res.json(req.user.transform());

/**
 * Create new user
 * @public
 */
exports.create = async (userData) => {
  try {
    const user = new User(userData);
    const savedUser = await user.save();
    return savedUser.transform();
  } catch (error) {
    throw User.checkDuplicateEmail(error);
  }
};

/**
 * Update existing user
 * @public
 */
exports.update = async (user, updatedData) => {
  try {
    const ommitRole = user.role !== 'admin' ? 'role' : '';
    const userTobeUpdated = omit(updatedData, ommitRole);
    const updatedUser = Object.assign(user, userTobeUpdated);
    console.log('>>>', 'user.service.js 55', updatedUser);
    const savedUser = await updatedUser.save();
    return savedUser.transform();
  } catch (error) {
    throw User.checkDuplicateEmail(error);
  }
};

/**
 * Get user list
 * @public
 */
exports.list = async (params) => {
  try {
    console.log('>>>', 'user.service.js 69', params);
    const users = await User.list(params);
    const transformedUsers = users.map(user => user.transform());
    return transformedUsers;
  } catch (error) {
    throw error;
  }
};

/**
 * Delete user
 * @public
 */
exports.remove = async user => user.remove();
