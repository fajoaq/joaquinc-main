const createFormSchema = async () => {
  const { object, string } = await import("yup");

  return object({
    firstName: string("Enter your first name")
      .max(21)
      .trim()
      .matches(/^[a-zA-Z]+$/g),
    lastName: string("Enter your last name")
      .max(21)
      .trim()
      .matches(/^[a-zA-Z]+$/g)
      .required("Last name is required"),

    email: string("Enter your email")
      .max(31)
      .trim()
      .email("Enter a valid email")
      .required("Email is required"),
    description: string("What would you like to accomplish?")
      .max(366)
      .required("Please enter some details"),
  });
};

export { createFormSchema };

/*  removed company input on frontent, but contact form api still requires it on the backend
  company: yup.string("Enter your company name if available").max(31),
*/
