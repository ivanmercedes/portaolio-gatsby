import styled from "styled-components";
import img from "../../images/side-element.svg";

const SliderSection = styled.section`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-color: #212121;
  padding: 5rem 0 5rem 0;
  position: relative;
  @media (max-width: 768px) {
    background-image: unset;

    .wrapper {
      display: none;
    }
  }
`;
const Title = styled.h2`
  font-weight: bold;
  font-size: 2.8rem;
  position: relative;
  margin-bottom: 1rem;
  padding-bottom: 0.4rem;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #262626;
  flex: 0 0 45%;
  margin: 15px;
  padding: 1rem;
  box-shadow: 2px 2px 7px #0000004a;
  border-radius: 5px;
  h1 {
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 300px;
  width: 100%;
  margin-top: 1rem;
  text-align: center;
`;

const Skill = styled.div`
  flex: 1 0 50%;
`;

export { SliderSection, Title, FlexRow, Box, SkillList, Skill };
