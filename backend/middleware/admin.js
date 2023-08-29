const admin = async (req, res, next) => {
  if (req.user.isAdmin) {
    return next();
  } else {
    throw new Error("Not Authorized, Admin only access");
  }
};

module.exports = admin;
