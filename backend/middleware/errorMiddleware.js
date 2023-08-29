module.exports = (err, req, res, next) => {
  const status = res.statusCode === 200 ? 500 : req.status;
  console.log(err);
  return res.status(status).json({ error: err?.message || err });
};
