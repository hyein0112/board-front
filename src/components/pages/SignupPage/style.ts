import styled from "@emotion/styled";

export const Container = styled.div`
  font-size: 1.25rem;
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
  font-size: 1.2rem;
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

export const ErrorMessage = styled.span`
  font-size: 1rem;
  position: absolute;
  text-align: end;
  width: 11.375rem;
  margin: -4.5rem 0 0 19.3rem;
  color: #ce2929;
`;

export const FormButton = styled.button`
  width: 30.938rem;
  height: 3.5rem;
  border-radius: 1.875rem;
  font-size: 1.4375rem;
  font-family: "Architects Daughter";
  border: 0.125rem solid #495464;
  margin: 6.75rem 0 2rem 0;

  &:hover {
    background-color: #495464;
    color: #f4f4f2;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.98);
    filter: brightness(90%);
  }
`;

export const LoginButton = styled.span`
  font-size: 1.1rem;
  font-family: "Noto Sans KR";
  color: #495464;

  &:hover {
    color: #708099;
  }
`;
