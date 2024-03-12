import { Block } from "../UI";
import { Typography } from "@mui/material";

const Practic = (title, description) => {
  return (
    <Block>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </Block>
  );
};

export default Practic;
