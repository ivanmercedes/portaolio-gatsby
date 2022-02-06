import React from "react";
import dummyData from "./dummyData";
import { Box, FlexRow, SkillList, SliderSection, Title, Skill } from "./styles";

const Skills = () => {
  const { frontend, backend } = dummyData;
  return (
    <SliderSection className="mt-4">
      <div className="container">
        <Title className="text-center">Mis Habilidades</Title>

        <FlexRow>
          <Box>
            <h2>Frontend</h2>
            <SkillList>
              {frontend.map((data) => (
                <Skill key={data.skill}>
                  <h3>{data.skill}</h3>
                  <p>{data.level}</p>
                </Skill>
              ))}
            </SkillList>
          </Box>

          <Box>
            <h2>Backend</h2>
            <SkillList>
              {backend.map((data) => (
                <Skill key={data.skill}>
                  <h3>{data.skill}</h3>
                  <p>{data.level}</p>
                </Skill>
              ))}
            </SkillList>
          </Box>
        </FlexRow>
      </div>
    </SliderSection>
  );
};

export default Skills;
