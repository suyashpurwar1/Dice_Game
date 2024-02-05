import styled  from "styled-components";
const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}
export default TotalScore;

const ScoreContainer = styled.div`
  width: 200px;
  text-align: center;
  h1 {
    color: #000;
    font-size: 100px;
  }
  p {
    color: #000;
    font-size: 24px;
    font-weight: 500;
  }
`;