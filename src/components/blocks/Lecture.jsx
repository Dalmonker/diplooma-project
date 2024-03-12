import Markdown from "react-markdown";
import { Typography } from "@mui/material";
import { Block } from "../UI";

const Lecture = ({ text }) => {
  return (
    <Block>
      <Markdown
        components={{
          h2(f) {
            console.log(f);
            return <Typography>{f.children}</Typography>;
          },
        }}
      >
        {text}
      </Markdown>
    </Block>
  );
};

export default Lecture;
