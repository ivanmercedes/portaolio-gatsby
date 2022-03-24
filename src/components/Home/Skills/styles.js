import styled from "styled-components";
import img from "../../../images/side-element.svg";

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
  border-radius: 20px;
  h2 {
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
    color: #66d9ef;
  }
  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;
  margin-top: 1rem;
  text-align: center;
  margin-left: 4rem;
  @media (max-width: 768px) {
    margin-left: 2rem;
    max-width: 100%;
  }
  @media (max-width: 568px) {
    margin-left: 0;
    max-width: 100%;
  }
`;

const Skill = styled.div`
  text-align: left;
  flex: 1 0 50%;

  h3 svg{
    width: 1em;
    height: 1em;
    color: #66d9ef;
    vertical-align: top;
  }
  @media (max-width: 568px) {
    flex: 1 0 100%;
    text-align: center;
  }
  margin-bottom: 1rem;
  p {
    color: #7a7a7a;
  }
`;

export { SliderSection, Title, FlexRow, Box, SkillList, Skill };
