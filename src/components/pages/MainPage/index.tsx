import * as S from "./style";
import * as C from "../../";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { SearchData } from "../../../atoms";

const MainPage = () => {
  const serchValue = useRecoilValue(SearchData);
  const uuid = localStorage.getItem("uuid");
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    async function getPostList() {
      try {
        const data = await axios.get(
          `${import.meta.env.VITE_BASE_URL}board/list`
        );
        console.log(data.data.data.reverse());

        setPosts(data.data.data);
      } catch (e) {
        console.log(e);
      }
    }
    uuid ? getPostList() : navigate("/signin");
  }, [navigate, uuid]);

  useEffect(() => {
    console.log(serchValue);
    setPosts(serchValue);
  }, [serchValue]);

  return (
    <>
      <C.Header />
      <S.Container>
        <C.SideBar />
        {posts?.map((post) => {
          const d = new Date(post.time);
          const date = moment(d).format("YYYY.MM.DD HH:mm");
          return (
            <S.PostBox key={post.id}>
              <S.ProfileBox>
                <S.ProfileImg />
                <S.ProfileTextBox>
                  <S.WriterNickname>{post.writer_nickname}</S.WriterNickname>
                  <span>@{post.writer_id}</span>
                </S.ProfileTextBox>
              </S.ProfileBox>
              <S.Title>{post.title}</S.Title>
              <S.Content>{post.content}</S.Content>
              <S.WriteTime>{date}</S.WriteTime>
            </S.PostBox>
          );
        })}
      </S.Container>
    </>
  );
};

export default MainPage;
