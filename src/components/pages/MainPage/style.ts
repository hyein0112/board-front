import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #e8e8e8;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 128px;
  overflow: scroll;
`;

export const PostBox = styled.div`
  position: relative;
  width: 45.375rem;
  height: max-content;
  min-height: 13.875rem;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f2;
  border-bottom: 1px solid #495464;
  padding: 0 1.125rem 2.875rem 1.125rem;
`;

export const ProfileBox = styled.div`
  display: flex;
  margin: 1rem 0 2.25rem 0;
`;

export const ProfileImg = styled.div`
  width: 2.188rem;
  height: 2.188rem;
  background-color: tomato;
  border-radius: 50%;
`;

export const ProfileTextBox = styled.div`
  height: 2.188rem;
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  justify-content: center;
  margin-left: 0.313rem;
  color: #495464;
`;

export const WriterNickname = styled.span`
  margin-bottom: 0.13rem;
  font-size: 0.8rem;
`;

export const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 0.688rem;
`;
export const Content = styled.span`
  font-size: 0.938rem;
  height: max-content;
  line-height: 1.1rem;
`;
export const WriteTime = styled.span`
  position: absolute;
  font-size: 0.75rem;
  bottom: 7px;
  right: 5px;
`;
