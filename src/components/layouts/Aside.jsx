import * as React from "react";
import { styled } from "@mui/material/styles";

const StyledAside = styled("aside")`
  width: 320px;
`;

const Aside = () => {
  return (
    <StyledAside>
      <nav></nav>
    </StyledAside>
  );
};

export default Aside;
