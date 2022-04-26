// removed company from form but zoho
// still requires it for leads creation
// company: yup.string("Enter your company name if available").max(31),

const createFormValidation = async () => {
  const yup = await import("yup");

  return yup.object({
    firstName: yup
      .string("Enter your first name")
      .max(21)
      .trim()
      .matches(/^[a-zA-Z]+$/g),
    lastName: yup
      .string("Enter your last name")
      .max(21)
      .trim()
      .matches(/^[a-zA-Z]+$/g)
      .required("Last name is required"),

    email: yup
      .string("Enter your email")
      .max(31)
      .trim()
      .email("Enter a valid email")
      .required("Email is required"),
    message: yup
      .string("What would you like to accomplish?")
      .max(566)
      .required("Please enter some details"),
  });
};

export { createFormValidation };
