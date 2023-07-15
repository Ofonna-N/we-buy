module.exports = (err, req, res, next) => {
  const status = res.statusCode === 200 ? 500 : req.status;

  return res.status(status).json({ error: err });
};
