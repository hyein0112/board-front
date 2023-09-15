import * as S from "./style";
import * as I from "../../../assets";

const SignupPage = () => {
  return (
    <S.Container>
      <I.Logo />
      <form style={{ marginTop: "2rem" }}>
        {["NAME", "PHONE NUMBER", "ID", "PASSWORD"].map((title, i) => (
          <S.FormBox key={i}>
            <S.FormTitle>{title}</S.FormTitle>
            <S.Input placeholder={"Enter Your " + title} />
          </S.FormBox>
        ))}
        <S.FormButton>Sign Up</S.FormButton>
      </form>
    </S.Container>
  );
};

export default SignupPage;
