import { Box, CircularProgress } from "@mui/material";
import Test from "../blocks/Test";
import Lecture from "../blocks/Lecture";
import Practic from "../blocks/Practic";
import { useEffect, useState } from "react";
import { request } from "../../core/utils/request";
import { useParams } from "react-router-dom";

const Main = () => {
  const [content, setContent] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { lesson } = useParams();

  useEffect(() => {
    setLoading(true);
    request("http://localhost:3000/api/lessons/" + lesson)
      .then((res) => {
        setContent(res);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [lesson]);

  if (isLoading)
    return (
      <Box
        component="main"
        p={2}
        display="flex"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress />
      </Box>
    );
  return (
    <Box component="main" p={2} flexGrow={1}>
      {content.map(({ type, data }) => {
        switch (type) {
          case "lecture":
            return <Lecture key={data.id} {...data} />;
          case "test":
            return <Test key={data.id} {...data} />;
          default:
            return null;
        }
      })}
    </Box>
  );
};

export default Main;
