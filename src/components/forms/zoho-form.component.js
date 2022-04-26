import TextField from "@mui/material/TextField";
import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { nightGrey } from "../../styles/colors";
import { textDropShadow } from "../../styles/text/text-shadow";

const StyledButton = styled(Button)`
  && {
    ${textDropShadow(0.08, `120,120,120`, 0.3)}
    color: ${({ theme }) => theme.palette.text.deselected};
    margin-top: 10px;
  }
`;

const SubmissionContainer = styled(Grid)`
  && {
    ${(props) => props.theme.breakpoints.down(`lg`)} {
      jutify-content: center;
    }
  }
`;

const StyledTextField = ({ className, elevation = 3, charLimit, ...rest }) => (
  <Paper className={className} elevation={elevation}>
    <TextField
      fullWidth={true}
      size="medium"
      variant="outlined"
      color="secondary"
      InputLabelProps={{
        style: { color: nightGrey },
      }}
      inputProps={{
        maxLength: charLimit,
        type: "text",
        autoComplete: "new-none",
        autoCapitalize: "none",
        autoCorrect: "off",
        autoFocus: "",
        spellCheck: "false",
      }}
      style={{ padding: 0 }}
      {...rest}
    />
  </Paper>
);

const ZohoFormComponent = ({
  initialValues,
  validation = null,
  onSubmit,
  handleFormActivation,
  idBase = "first",
  ...rest
}) => {
  return (
    <Formik
      validationSchema={validation}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form onFocus={handleFormActivation} {...rest}>
          <Grid container direction="column" rowSpacing={3}>
            {/* first and last name */}
            <Grid item container spacing={2}>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  className="border-top-radius__none"
                  id={`${idBase}-firstName`}
                  name="firstName"
                  label="First Name"
                  value={formik.values[`${idBase}-firstName`]}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  className="border-top-radius__none"
                  required
                  id={`${idBase}-lastName`}
                  name="lastName"
                  label="Last Name"
                  value={formik.values[`${idBase}-lastName`]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                  elevation={1}
                />
              </Grid>
            </Grid>

            {/* email*/}
            <Grid item>
              <StyledTextField
                required
                id={`${idBase}-email`}
                name="email"
                label="Email"
                type="email"
                value={formik.values[`${idBase}-email`]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                charLimit={31}
              />
            </Grid>
            {/* message */}
            <Grid item>
              <StyledTextField
                required
                multiline
                color="secondary"
                variant="standard"
                id={`${idBase}-message`}
                name="message"
                value={formik.values[`${idBase}-message`]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                minRows={5}
                maxRows={6}
                placeholder="Message"
                charLimit={566}
                style={{
                  minHeight: 145,
                  width: "100%",
                  border: "none",
                  padding: "9px",
                }}
                aria-label="project information"
              />
            </Grid>
            <SubmissionContainer container item justifyContent="start">
              <StyledButton
                color="text"
                variant="contained"
                size="large"
                type="submit"
              >
                SEND MESSAGE
              </StyledButton>
            </SubmissionContainer>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export { ZohoFormComponent };
