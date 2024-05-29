const jwt = require("jsonwebtoken")

const verifyJWT = (req, res, next) => {
  //bearer header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Header"))
    return res.status(401).json({message: "Unauthorized"});
}

const token = authHeader.split(" ")[1];

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded
  next()
}catch (err){
  res.status(401).json({message: "Unauth"})
}

module.exports = {verifyJWT,}