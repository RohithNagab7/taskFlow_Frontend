import { useForm } from "react-hook-form";
import GlobalCustomFormComp from "../../components/globalformcomp/GlobalCustomFormComp";
import {
  HeadingText,
  LoginPageWrapper,
} from "../../components/globalStyles/GlobalStyles";
import { loginSchema, type LoginFormValues } from "./LoginPageUtils";
import { postLoginUser } from "./LoginServices";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const submitHandler = async (data: LoginFormValues) => {
    try {
      const response = await postLoginUser(data);
      if (response.success) {
        navigate("/");
      }
    } catch (err: any) {
      console.error("error: ", err.message);
    }
  };
  return (
    <LoginPageWrapper>
      <HeadingText>Login </HeadingText>
      <GlobalCustomFormComp
        control={control}
        errors={errors}
        handleSubmit={handleSubmit}
        loginForm={true}
        submitHandler={submitHandler}
      />
    </LoginPageWrapper>
  );
};

export default LoginPage;
