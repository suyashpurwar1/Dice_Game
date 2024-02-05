import styled from "styled-components";
const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>
          <ul>
            <li>Select any number</li>
            <li>Click on dice image</li>
            <li>
              After click on dice if selected number is equal to dice number you
              will get same point as dice{" "}
            </li>
            <li>If you get wrong guess then 2 point will be dedcuted </li>
          </ul>
        </p>
      </div>
    </RulesContainer>
  );
};
export default Rules;

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  margin: 20px auto;
  max-width: 750px;
  border-radius: 10px;
  h2 {
    font-size: 24;
    font-weight: bold;
  }
  .text {
    margin-top: 24;
  }
`;
