import styled from "styled-components";

interface IBtn {
  size: string;
  color?: string;
}

export const Button = styled.button<IBtn>`
  min-width: ${(props) => (props.size === "big" ? "100px" : "80px")};
  max-width: ${(props) => (props.size === "big" ? "130px" : "130px")};
  height: auto;
  color: ${(props) =>
    props.color === "white" ? "hsl(12, 88%, 59%)" : " hsl(0, 0%, 98%)"};
  border: none;
  border-radius: 30px;
  background-color: ${(props) =>
    props.color === "white" ? "#fff" : "hsl(12, 88%, 59%)"};
  padding: 0.8rem 2rem;
  white-space: nowrap;
  font-size: 12px;
  -webkit-box-shadow: 0px 4px 13px -2px #f25f3a;
  box-shadow: 0px 4px 6px -2px #f25f3a;
  cursor: pointer;
  transition: 0.2s linear;
  font-weight: 700;
  &:hover {
    background-color: ${(props) =>
      props.color === "white" ? "#f7f7f7df" : "#f78366;"};
  }
`;
