import { Controller } from "react-hook-form";
import GlobalInputComp from "../formfields/GlobalInputComp";
import {
  ColumnFlexDiv,
  FormContainer,
  LoginFormWrapper,
  PrimaryText,
  StyledInput,
  SubmitButton,
} from "../globalStyles/GlobalStyles";
import { FieldMapping, FormFields, GlobalFormFields } from "./GlobalFormFields";
import type { GlobalCustomFormCompProps } from "../globalStyles/GlobalUtils";

const GlobalCustomFormComp = (props: GlobalCustomFormCompProps) => {
  const {
    loginForm = false,
    control,
    errors,
    submitHandler,
    handleSubmit,
    fileUpload = false,
  } = props;

  const MappingFields = GlobalFormFields.filter(
    (field) =>
      !(
        loginForm &&
        (field.name === FieldMapping[FormFields.NAME].name ||
          field.name === FieldMapping[FormFields.MOBILENUMBER].name)
      )
  );
  return (
    <LoginFormWrapper>
      <FormContainer onSubmit={handleSubmit(submitHandler)}>
        {!fileUpload &&
          MappingFields.map((field) => (
            <Controller
              key={field.name}
              name={field.name}
              defaultValue={field.type === "number" ? 0 : ""}
              control={control}
              render={({ field: inputField }) => (
                <GlobalInputComp
                  heading={field.heading}
                  type={field.type}
                  error={errors?.[field.name]?.message as string}
                  {...inputField}
                />
              )}
            />
          ))}
        {fileUpload && (
          <Controller
            name="file"
            control={control}
            render={({ field: { onChange, ref } }) => (
              <ColumnFlexDiv>
                <PrimaryText>Upload File</PrimaryText>

                <StyledInput
                  type="file"
                  accept=".csv,.xls,.xlsx"
                  ref={ref}
                  onChange={(e) => onChange(e.target.files)}
                 
                />

                {errors?.file && <span>{errors.file.message as string}</span>}
              </ColumnFlexDiv>
            )}
          />
        )}

        <SubmitButton type="submit">
          {loginForm ? "Login" : fileUpload ? "Upload" : "Register"}
        </SubmitButton>
      </FormContainer>
    </LoginFormWrapper>
  );
};

export default GlobalCustomFormComp;
