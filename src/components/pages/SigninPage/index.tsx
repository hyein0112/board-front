import * as S from "./style";
import * as I from "../../../assets";

const SigninPage = () => {
  return (
    <S.Container>
      <I.Logo />
      <form style={{ marginTop: "2rem" }}>
        {["ID", "PASSWORD"].map((title, i) => (
          <S.FormBox key={i}>
            <S.FormTitle>{title}</S.FormTitle>
            <S.Input placeholder={"Enter Your " + title} />
          </S.FormBox>
        ))}
        <S.FormButton>Sign In</S.FormButton>
      </form>
    </S.Container>
  );
};

export default SigninPage;
