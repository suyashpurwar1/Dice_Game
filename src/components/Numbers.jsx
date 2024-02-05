import { useState } from "react";
import styled from "styled-components";
const Numbers = ({point, error, setError, selectedNum, setSelectedNum }) => {
  const arr = [1, 2, 3, 4, 5, 6];

  const numberSelector = (value) => {
    setSelectedNum(value);
    setError("");
  };

  return (
    <NumberContainer>
      <p className="err">{error}</p>
      <div className="flex">
        {arr.map((value, i) => (
          <Box
            isSelected={value === selectedNum}
            key={i}
            onClick={() => numberSelector(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
      <h5 className="history">{point}</h5>
    </NumberContainer>
  );
};
export default Numbers;
const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .err {
    font-size: 22px;
    color: red;
    font-weight: 400;
  }
  .history{
    
  }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  font-size: 26px;
  font-weight: 700;
  place-items: center;
  cursor: pointer;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
