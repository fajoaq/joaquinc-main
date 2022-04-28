//const axios = require("axios");
//const qs = require("qs");
import { validate } from "../../src/components/forms/utils/validate.utils";
import { sanitizeFormValues } from "../../src/components/forms/utils/sanitize-form.utils";
import { createFormSchema } from "../../src/components/forms/utils/create-form-schema.utils";

const handler = async (req, res) => {
  // Dummy Api Code
  const sanitizedValues = await sanitizeFormValues(req.body);

  if (sanitizedValues) return res.status(200).json({ message: "Message Sent" });

  return res.status(500).end();
};

// The validate middleware can take in an object for its first argument
// or a function that returns a promise
export default validate(createFormSchema, handler);
