//const axios = require("axios");
//const qs = require("qs");
import { validate } from "../../src/components/forms/utils/validate.utils";
import { createFormSchema } from "../../src/components/forms/utils/create-form-schema.utils";

const handler = (req, res) => {
  // Dummy Api Code
  if (req.body) return res.status(200).json({ message: "Message Sent" });

  return res.status(500).end();
};

export default validate(createFormSchema, handler);
