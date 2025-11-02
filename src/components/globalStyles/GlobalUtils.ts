import type { FieldErrors } from "react-hook-form";

export interface FlexRowDivProps {
    $justifycontent?: string;
    $gap?: string;
    $width?: string;
    $alignitems?: string;
};

export interface GlobalCustomFormCompProps {
  loginForm?: boolean;
  fileUpload?: boolean;
  control: any;
  errors: FieldErrors;
  handleSubmit: any;
  submitHandler: (data: any) => void;
}