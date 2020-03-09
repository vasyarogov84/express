// @desc Logs request to console
const logger = (req, res, next) => {
  console.log(`Middlewear ran`);
  next();
};

module.exports = logger;
