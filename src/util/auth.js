import jwt from "jsonwebtoken";
// import dotenv from "dotenv";

// dotenv.config()

export const createToken = (email) => {
  const token = jwt.sign({email}, "process.env.JWTSign", {
    expiresIn: "7d"
  })
  return token
}

export const verifyToken = (token) => {
  jwt.verify(token, "process.env.JWTSign", function(err, verified) {
    if (err.name === "TokenExpiredError") {
      throw {
        type: "Expired",
        messsage: "Token has expired",
      }
    }

    if (err) {
      throw {
        type: "invalid",
        message: "Invalid token provided"
      }
    }

    return {
      type: "valid",
      token: verified,
      message: "valid token"
    }
  })
}