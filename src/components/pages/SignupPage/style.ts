import styled from "@emotion/styled";

export const Container = styled.div`
  font-size: 1.4375rem;
  font-family: "Architects Daughter";
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin-top: -3rem;
`;

export const FormBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 2.813rem;
`;

export const FormTitle = styled.span`
  position: absolute;
  width: 11.25rem;
  text-align: end;
  margin-left: -14.31rem;
`;

export const Input = styled.input`
  font-size: 1.4375rem;
  font-family: "Noto Sans KR";
  border: 0.125rem solid #495464;
  width: 30.938rem;
  height: 3.125rem;
  padding-left: 1.2rem;
  box-sizing: border-box;
  border-radius: 0.313rem;
  outline: none;
  &:focus {
    border: 0.18rem solid #495464;
  }
`;

export const FormButton = styled.button`
  width: 30.938rem;
  height: 3.5rem;
  border-radius: 1.875rem;
  font-size: 1.4375rem;
  font-family: "Architects Daughter";
  border: 0.125rem solid #495464;
  margin-top: 6.75rem;
`;
