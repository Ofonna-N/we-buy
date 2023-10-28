const demoAdmin = async (req, res, next) => {
  if (!req.user.demoUser) {
    return next();
  } else {
    throw new Error("Demo account cannot perform this action");
  }
};

module.exports = demoAdmin;
