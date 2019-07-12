module.exports = (req, res, next) => {
  const err = new Error('path not found');
  err.status = 404;
  next(err);
};
