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
// still requires it on for leads creation
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
    const [consultation_optin, setContulsationOptIn] = useState(undefined);
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
        const { createFormValidation } = await import(
          "./utils/create-form-validation.utils"
        );
        const validation = await createFormValidation();

        setValidationSchema(validation);
        setFormActivated(true);
      } catch (error) {
        console.log(error);
      }
    };

    // disable form submission in development branch
    const handleSubmit = async (values) => {
      if (submitted === true) return;

      try {
        if (formEnabled.current == false) return;

        clearTimeout(thymeRef.current);

        const axios = await (await import("axios")).default;
        const { sanitizeForm } = await import("./utils/sanitize-form.utils");
        const sanitizedValues = await sanitizeForm(values);

        axios
          .post("/api/create-lead", {
            ...sanitizedValues,
            consultation_optin: consultation_optin,
          })
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
