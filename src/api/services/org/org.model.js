const mongoose = require('mongoose');

/**
 * Org Schema
 * @private
 */
const orgSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
});

orgSchema.statics = {

  /**
   * Generate a org object and saves it into the database
   *
   * @param {Org} org
   * @returns {Org}
   */
  generate(org) {
    const name = org.name;
    const orgObject = new Org({
      name,
    });
    orgObject.save();
    return orgObject;
  },
};

/**
 * @typedef Org
 */
const Org = mongoose.model('Org', orgSchema);
module.exports = Org;
