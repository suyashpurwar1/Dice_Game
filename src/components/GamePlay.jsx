import styled from "styled-components";
import Numbers from "./Numbers";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";
import { useState } from "react";
import { Button, OutlineBtn } from "../styled/Button.js";
import Rules from "./Rules.jsx";
const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNum, setSelectedNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [point, setPoint] = useState("History : None");

  const generateDiceNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNum) {
      setError((prev) => "Number not Selected");
      return;
    }
    setError((prev) => "");
    const randomNum = generateDiceNumber(1, 7);
    setCurrentDice((prev) => randomNum);

    if (selectedNum === randomNum) {
      setScore((prev) => prev + randomNum);
      setPoint("History : Last round -> CORRECT  (+" + selectedNum + ")");
    } else {
      setScore((prev) => prev - 2);
      setPoint("History : Last round -> WRONG (-2)");
    }
    setSelectedNum(undefined);
  };

  const resetScore = () => {
    setScore(0);
    setPoint("History : None");
  };

  const rulestoggle = () => {
    setShowRules(!showRules);
  };
  return (
    <MainContainer>
      <div className="top_sec">
        <TotalScore score={score} />
        <Numbers
          error={error}
          setError={setError}
          selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
          point={point}
        />
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btn">
        <OutlineBtn onClick={resetScore}>Reset</OutlineBtn>
        <Button onClick={rulestoggle}>
          {showRules ? "Hide " : "Show "}Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};
export default GamePlay;

const MainContainer = styled.div`
  padding-top: 50px;
  .top_sec {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }
`;
