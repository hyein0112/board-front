import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  height: 128px;
  background-color: #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img`
  background-color: #e8e8e8;
  position: absolute;
  left: 1rem;
`;

export const SearchBar = styled.input`
  width: 38.487rem;
  height: 3.5rem;
  outline: none;
  border-radius: 1.875rem;
  border: 2px solid #495464;
  background: #f4f4f2;
  font-size: 1.438rem;
  text-align: center;
  &::placeholder {
    color: #495464;
    font-family: "Architects Daughter";
  }
`;
