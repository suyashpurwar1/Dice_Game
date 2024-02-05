import styled from "styled-components";

export const Button = styled.button`
  width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000000;
  color: white;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.3s background ease-in;
  cursor: pointer;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.25s background ease-in;
  }
`;
export const OutlineBtn = styled(Button)`
  color: black;
  background: #fff;
  border: 1px solid black;
  &:hover {
    background-color: black;
    border: 1px solid black;
    color: white;
    transition: 0.25s background ease-in;
  }
`;
