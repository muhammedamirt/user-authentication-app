import jwt from "jsonwebtoken";
import User from "../models/schema/userModel.js";

export const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.log("1");
    return res.status(401).json({ error: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    console.log("2");
    return res.status(401).json({ error: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      console.log("3");
      return res.status(401).json({ error: "Unauthorized" });
    }
    const userId = decodedToken.userId;
    User.findById(userId)
      .then((user) => {
        if (!user) {
          console.log("4");
          return res.status(401).json({ error: "Unauthorized" });
        }
        // set token expiration to logout session
        const isExpired = new Date() > user.logoutTime;
        if (isExpired) {
          console.log("5");
          return res.status(401).json({ error: "Session Expired" });
        }
        req.user = user;
        next();
      })
      .catch((err) => {
        console.log('6');
        return res.status(401).json({ error: "Unauthorized" });
      });
  });
};
