const axios = require("axios");
const qs = require("qs");

const createLead = async (req, res) => {
  // Code
  if (req.body) return res.status(200).json({ message: "Lead Added" });

  return res.status(500).end();
};

export default createLead;
