/* 
    @desc get paypal client ID
    @route api/paypal/clientId
    @access private
*/
const getPaypalClientId = (req, res) => {
  const params = req.query;

  if (params.key !== process.env.APP_TOKEN)
    throw new Error("unauthorized access to protected route");
  return res.json({ id: process.env.PAYPAL_CLIENT_ID });
};

module.exports = {
  getPaypalClientId,
};
