import styled from "styled-components";
import {Button} from "../styled/Button.js"
const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/public/images/dices 1.png" alt="dice image" />
      </div>

      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
  
      </div>
    </Container>
  );
};
export default StartGame;

const Container = styled.div`
  max-width: 80%;
  display: flex;
  margin: 8% 10% 8% 5%;
  height: 100%;
  align-items: center;
  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

