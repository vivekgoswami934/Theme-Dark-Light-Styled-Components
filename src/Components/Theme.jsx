import React from "react";
import styled from "styled-components";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const Theme = ({ darkMode, setDarkMode }) => {
  return (
    <CardWrapper onClick={() => setDarkMode((p) => !p)}>
      {darkMode ? (
        <Card>
          <WbSunnyIcon color={"warning"} />
        </Card>
      ) : (
        <Card>
          <DarkModeIcon />
        </Card>
      )}
    </CardWrapper>
  );
};

export default Theme;

const CardWrapper = styled.div`
  position: fixed;
  right: 2rem;
  top: 2rem;
`;

const Card = styled.div``;
