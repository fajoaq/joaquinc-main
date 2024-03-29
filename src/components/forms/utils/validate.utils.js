function validate(schema, handler) {
  return async (req, res) => {
    if (["POST", "PUT"].includes(req.method)) {
      try {
        // if schema a function, then
        if (schema instanceof Function) {
          const resolvedSchema = await schema();
          req.body = await resolvedSchema.validate(req.body, {
            abortEarly: false,
          });
        } else
          req.body = await schema.validate(req.body, {
            stripUnknown: true,
          });
      } catch (error) {
        //changed return message from return res.status(400).json(error);
        return res
          .status(400)
          .json({ error: "Message schema validation failed." });
      }
    }
    await handler(req, res);
  };
}

export { validate };
