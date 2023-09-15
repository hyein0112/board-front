import { Link } from "react-router-dom";
import { useForm, FieldErrors } from "react-hook-form";
import * as S from "./style";
import * as I from "../../../assets";
import { SignupType } from "../../../types/auth";
// import { auth } from "../../../utils/Auth";
import axios from "axios";

const SignupPage = () => {
  // const navigate = useNavigate();
  const { register, handleSubmit } = useForm<SignupType>();
  const handleSubmitData = async (SignupData: SignupType) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}auth/signup`,
        {
          ...SignupData,
        }
      );
      console.log(res.data);
      alert("회원가입 성공");

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log(e);
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
            <S.FormTitle>NAME</S.FormTitle>
            <S.Input placeholder={"Enter Your NAME"} {...register("name")} />
          </S.FormBox>
        </>
        <>
          <S.FormBox>
            <S.FormTitle>PHONE NUMBER</S.FormTitle>
            <S.Input
              placeholder={"Enter Your PHONE NUMBER"}
              {...register("phone_number")}
            />
          </S.FormBox>
        </>
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
        <S.FormButton>Sign Up</S.FormButton>
      </form>
      <Link to={"/signin"}>
        <S.LoginButton>이미 가입된 회원이신가요?</S.LoginButton>
      </Link>
    </S.Container>
  );
};

export default SignupPage;
