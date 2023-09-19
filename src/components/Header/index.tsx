import axios from "axios";
import * as S from "./style";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { SearchData } from "../../atoms";

const Header = () => {
  const [inputData, setInputData] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchData] = useRecoilState(SearchData);
  const changeData = (e: React.FormEvent<HTMLInputElement>) => {
    setInputData(e.currentTarget.value);
  };
  async function submitData(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const data = await axios.get(
        `${import.meta.env.VITE_BASE_URL}board/list?q=${inputData}`
      );
      setSearchData(data.data.data.reverse());
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      alert(e?.response.data.message);
      location.reload();
    }
  }
  return (
    <S.Container>
      <S.Logo src="/public/favicon.svg" alt="MiniLogo" />
      <form onSubmit={submitData}>
        <S.SearchBar
          value={inputData}
          onChange={changeData}
          placeholder="Search"
        />
        <input type="submit" hidden />
      </form>
    </S.Container>
  );
};

export default Header;
