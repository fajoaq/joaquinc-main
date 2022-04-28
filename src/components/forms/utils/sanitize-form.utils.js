const sanitizeForm = async (values) => {
  // We keep Validator out of the initial bundle
  // by pulling it in dynamically
  const { escape } = await (await import("validator")).default;
  let sanitizedValues = {};
  const entries = Object.entries(values);

  entries.map((entry) => (sanitizedValues[entry[0]] = escape(entry[1])));
  return sanitizedValues;
};

export { sanitizeForm };
