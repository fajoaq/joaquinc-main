import { forwardRef, useState, useEffect, createRef } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { ZohoFormComponent } from "./zoho-form.component";
import { textDropShadow } from "../../styles/text/text-shadow";

// form timer and toggle ref, for spam bots
const thymeCount = 10000; // 10 seconds after focus
const thymeRef = createRef();
const formEnabled = createRef(false);

const defaultSuccessMessage = "success";
const defaultConfirmMessage = "Please confirm your email";

// removed company from form but zoho
// still requires it for leads creation
/*  company: "", */

const disabledStyled = {
  opacity: 0,
  visibility: "hidden",
  pointerEvents: "none",
};

const enabledStyle = {
  opacity: 1,
  visibility: "visible",
  pointerEvents: "all",
};

const StyledContainer = styled("div")`
  display: grid;

  & .zoho-disable-on-submit.submitted {
    ${disabledStyled}
  }

  & .zoho-enable-on-submit {
    ${disabledStyled}
  }

  & .zoho-enable-on-submit.submitted {
    ${enabledStyle}
    ${textDropShadow(0.09, `255,255,255`, 0.9)}
  }
`;
const StyledContainerItem = styled("div")`
  grid-column: 1;
  grid-row: 1;
`;

const initialValues = {
  firstName: "",
  lastName: "",

  email: "",
  message: "",
  source: "Website Lead Form",
};

const ZohoLeadForm = forwardRef(
  (
    {
      onLoad,
      onSubmit,
      idBase = "first",
      successMessage,
      confirmEmailMessage,
      ...rest
    },
    ref
  ) => {
    const [formActivated, setFormActivated] = useState(false);
    const [validationSchema, setValidationSchema] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
      if (onLoad) onLoad();
    }, [onLoad]);

    const handleFormActivation = async () => {
      if (formActivated === true) return;

      // start form enable timer
      formEnabled.current = false;
      thymeRef.current = setTimeout(() => {
        formEnabled.current = true;
      }, thymeCount);

      try {
        const { createFormSchema } = await import(
          "./utils/create-form-schema.utils"
        );
        const validation = await createFormSchema();

        setValidationSchema(validation);
        setFormActivated(true);
      } catch (error) {
        console.log(error);
      }
    };

    const handleSubmit = async (values) => {
      if (submitted === true) return;

      try {
        if (formEnabled.current == false) return;

        clearTimeout(thymeRef.current);

        const { post } = await (await import("axios")).default;
        const { sanitizeForm } = await import("./utils/sanitize-form.utils");
        const sanitizedValues = await sanitizeForm(values);

        post("/api/create-lead", sanitizedValues)
          .then((response) => {
            setSubmitted(true);
          })
          .catch((error) => {});

        if (onSubmit) onSubmit();
        else {
          // hide all zoho form inputs on page
          const elmsToDisable = document.querySelectorAll(
            ".zoho-disable-on-submit"
          );
          const elmsToEnable = document.querySelectorAll(
            ".zoho-enable-on-submit"
          );

          for (let i = 0; i < elmsToDisable.length; i++) {
            elmsToDisable[i].classList.add("submitted");
          }
          for (let i = 0; i < elmsToEnable.length; i++) {
            elmsToEnable[i].classList.add("submitted");
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <StyledContainer {...rest} ref={ref}>
        <StyledContainerItem className="zoho-lead-form__input zoho-disable-on-submit">
          <ZohoFormComponent
            handleFormActivation={handleFormActivation}
            initialValues={initialValues}
            validation={formActivated ? validationSchema : null}
            onSubmit={handleSubmit}
            idBase={idBase}
          />
        </StyledContainerItem>

        <StyledContainerItem className="zoho-enable-on-submit">
          <Typography variant="h5" component="h3">
            {successMessage ? successMessage : defaultSuccessMessage}
          </Typography>
          <Typography variant="body1">
            {confirmEmailMessage ? confirmEmailMessage : defaultConfirmMessage}
          </Typography>
        </StyledContainerItem>
      </StyledContainer>
    );
  }
);
ZohoLeadForm.displayName = "ZohoLeadForm";

export { ZohoLeadForm };
