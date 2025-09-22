import jwt from "jsonwebtoken";
import Company from "../models/company.js";

const protectCompany = async (req, res, next) => {
  let token = req.headers.token

  if (!token) return res.status(401).json({ message: "No token" });

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find company in DB and attach to req
    req.Company = await Company.findById(decoded.id).select("-password");

    next(); // move to next function (like postJob)
  } catch (error) {
    res.status(401).json({ message: "Not authorized" });
  }
};

export default protectCompany
