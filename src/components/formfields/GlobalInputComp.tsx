import React from "react";
import { ColumnFlexDiv, PrimaryText, StyledInput } from "../globalStyles/GlobalStyles";

export interface NoCodeInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  heading?: string;
  error?: string;
  name: string;
}

const GlobalInputComp = React.forwardRef<HTMLInputElement, NoCodeInputProps>(
  ({ heading, error, type = "text", name, ...rest }, ref) => {
    return (
      <ColumnFlexDiv>
        {heading && <PrimaryText>{heading}</PrimaryText>}

        <StyledInput type={type} name={name} ref={ref} {...rest} />

        {error && <span>{error}</span>}
      </ColumnFlexDiv>
    );
  }
);

export default GlobalInputComp;
