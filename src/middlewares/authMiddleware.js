import {verifyToken} from "../util/auth.js"; 

async function authMiddleware(req, res, next) {
  try {
    if (req.headers === "Authorization") {
      const {token} = req
      const verifiedToken = verifyToken(token)
      if (verifiedToken.type === "valid") {
        next()
      }
    }
  } catch (error) {
    return error;
  }
}

export default authMiddlewarey
