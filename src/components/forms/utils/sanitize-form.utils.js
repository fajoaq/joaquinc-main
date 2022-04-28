// We keep Validator out of the initial bundle
// by pulling it in dynamically

// Object.entries returns a 2D array
// whitelist uses RegEx, some characters must be escaped
// there is a leading " " space at start of chars

const sanitizeFormValues = async (values) => {
  const { whitelist } = await (await import("validator")).default;
  var chars =
    " \\.@AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
  let sanitizedValues = {};
  const entries = Object.entries(values);

  entries.forEach(
    (entry) => (sanitizedValues[entry[0]] = whitelist(entry[1], chars))
  );
  return sanitizedValues;
};

export { sanitizeFormValues };
