import { useState } from "react";
import styled from "styled-components";

const RollDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/public/images/dice_${currentDice}.png`} alt="Dice" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};
export default RollDice;

const DiceContainer = styled.div`
  margin-top: 45px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
