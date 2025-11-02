export const FormFields = {
  EMAIL: "email",
  PASSWORD: "password",
  MOBILENUMBER: "mobileNumber",
  NAME: "name",
};

export const FieldMapping = {
  [FormFields.EMAIL]: {
    heading: "Email",
    name: "email",
    type: "email",
  },
  [FormFields.PASSWORD]: {
    heading: "Password",
    name: "password",
    type: "password",
  },
  [FormFields.MOBILENUMBER]: {
    heading: "Mobile Number",
    name: "mobileNumber",
    type: "tel",
  },
  [FormFields.NAME]: {
    heading: "Full Name",
    name: "name",
    type: "text",
  },
};

export const GlobalFormFields = [
  FieldMapping[FormFields.EMAIL],
  FieldMapping[FormFields.PASSWORD],
  FieldMapping[FormFields.NAME],
  FieldMapping[FormFields.MOBILENUMBER],
];
