import React from "react";
import { Box, FlexRow, SkillList, SliderSection, Title, Skill } from "./styles";

const Skills = () => {
  return (
    <SliderSection className="mt-4">
      <div className="container">
        <Title className="text-center">Mis Habilidades</Title>

        <FlexRow>
          <Box>
            <h2>Frontend</h2>
            <SkillList>
              <Skill>
                <h3>HTML</h3>
                <p>Avanzado</p>
              </Skill>
              <Skill>
                <h3>HTML</h3>
                <p>Avanzado</p>
              </Skill>
              <Skill>
                <h3>HTML</h3>
                <p>Avanzado</p>
              </Skill>
              <Skill>
                <h3>HTML</h3>
                <p>Avanzado</p>
              </Skill>
            </SkillList>
          </Box>
          <Box>
            <h2>Backend</h2>
          </Box>
          <Box>
            <h2>Base de Datos</h2>
          </Box>
        </FlexRow>
      </div>
    </SliderSection>
  );
};

export default Skills;
