const Org = require('./org.model');

/**
 * Get org list
 * @public
 */
exports.list = async (params) => {
  try {
    const orgs = await Org.list(params);
    const transformedOrgs = orgs.map(org => org.transform());
    return transformedOrgs;
  } catch (error) {
    throw error;
  }
};
