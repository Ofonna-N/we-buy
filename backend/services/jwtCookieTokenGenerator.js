const jwt = require("jsonwebtoken");
const ms = require("ms");

const jwtCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production" ? true : false,
  signed: true,
};

/*  
    This function generates a token based on the user ID and sets the response for the cookie 
    passed in the function parameter
*/
function generateJwtCoookieToken(res, user) {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: ms("30d"),
  });

  res.cookie("jwt", token, {
    ...jwtCookieOptions,
    expires: ms("30d"),
    maxAge: ms("30d"),
  });
}

module.exports.jwtCookieOptions = jwtCookieOptions;
module.exports.generateJwtCoookieToken = generateJwtCoookieToken;
