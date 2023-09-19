import styled from "@emotion/styled";

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 7.688rem;
  height: 8.875rem;
  position: absolute;
  left: 5.188rem;
  top: 14.125rem;
  font-size: 1.25rem;
  font-family: "Architects Daughter";
`;

export const SideButton = styled.div`
  display: flex;
  align-items: flex-end;
  &:hover {
    cursor: pointer;
    filter: brightness(70%);
  }
`;

export const ButtonTitle = styled.span`
  color: #9da2b0;
  margin-left: 0.813rem;
`;
