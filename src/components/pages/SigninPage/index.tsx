import * as S from "./style";
import * as I from "../../../assets";
import { Link, useNavigate } from "react-router-dom";
import { FieldErrors, useForm } from "react-hook-form";
import { LoginType } from "../../../types/auth";
import axios from "axios";

const SigninPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginType>();
  const handleSubmitData = async (LoginData: LoginType) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}auth/signin`,
        {
          ...LoginData,
        }
      );
      localStorage.setItem("uuid", LoginData.id);
      console.log(res.data);
      alert(res.data.message);
      navigate("/");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      e?.response.data ? alert(e?.response.data.message) : console.log(e);
    }
  };

  const handleError = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <S.Container>
      <I.Logo />
      <form
        onSubmit={handleSubmit(handleSubmitData, handleError)}
        style={{ marginTop: "2rem" }}
      >
        <>
          <S.FormBox>
            <S.FormTitle>ID</S.FormTitle>
            <S.Input placeholder={"Enter Your PHONE ID"} {...register("id")} />
          </S.FormBox>
        </>
        <>
          <S.FormBox>
            <S.FormTitle>PASSWORD</S.FormTitle>
            <S.Input
              placeholder={"Enter Your PHONE PASSWORD"}
              {...register("pw")}
            />
          </S.FormBox>
        </>
        <S.FormButton>Sign In</S.FormButton>
      </form>
      <Link to={"/signup"}>
        <S.LoginButton>아직 회원가입을 하지 않으셨나요??</S.LoginButton>
      </Link>
    </S.Container>
  );
};

export default SigninPage;
