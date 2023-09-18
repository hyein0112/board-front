import * as S from "./style";

const Header = () => {
  return (
    <S.Container>
      <S.Logo src="/public/favicon.svg" alt="MiniLogo" />
      <S.SearchBar placeholder="Search" />
    </S.Container>
  );
};

export default Header;
