const bcrypt = require('bcrypt');

/**
 * Hashes plain string password using bcrypt
 * @param {string} password Plain text password
 */
module.exports.buildPassword = async password => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
