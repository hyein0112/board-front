import { Link } from "react-router-dom";
import { useForm, FieldErrors } from "react-hook-form";
import * as S from "./style";
import * as I from "../../../assets";
import { SignupType } from "../../../types/auth";
import axios from "axios";

const SignupPage = () => {
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupType>();
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
            <S.FormTitle>NICKNAME</S.FormTitle>
            <S.Input
              minLength={2}
              placeholder={"Enter Your NICKNAME"}
              {...register("nickname", {
                required: true,
              })}
            />
            {errors.nickname?.type === "required" && (
              <S.ErrorMessage>닉네임 입력은 필수입니다.</S.ErrorMessage>
            )}
          </S.FormBox>
        </>
        <>
          <S.FormBox>
            <S.FormTitle>PHONE NUMBER</S.FormTitle>
            <S.Input
              minLength={9}
              placeholder={"Enter Your PHONE NUMBER"}
              {...register("phone_number", {
                required: true,
              })}
            />
            {errors.phone_number?.type === "required" && (
              <S.ErrorMessage>전화번호 입력은 필수입니다.</S.ErrorMessage>
            )}
          </S.FormBox>
        </>
        <>
          <S.FormBox>
            <S.FormTitle>ID</S.FormTitle>
            <S.Input
              minLength={2}
              placeholder={"Enter Your ID "}
              {...register("id", {
                required: true,
              })}
            />
            {errors.id?.type === "required" && (
              <S.ErrorMessage>아이디 입력은 필수입니다.</S.ErrorMessage>
            )}
          </S.FormBox>
        </>
        <>
          <S.FormBox>
            <S.FormTitle>PASSWORD</S.FormTitle>
            <S.Input
              minLength={4}
              maxLength={20}
              placeholder={"Enter Your PASSWORD (4 to 20 characters)"}
              {...register("pw", {
                required: true,
              })}
            />
            {errors.pw?.type === "required" && (
              <S.ErrorMessage>비밀번호 입력은 필수입니다.</S.ErrorMessage>
            )}
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
