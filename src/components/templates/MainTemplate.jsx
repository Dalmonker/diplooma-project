import Header from "../layouts/Header";
import Main from "../layouts/Main";
import Aside from "../layouts/Aside";
import Footer from "../layouts/Footer";
// import { Wrapper } from "../UI";
import { Box } from "@mui/material";

const MainTemplate = () => {
  return (
    <Box display="flex" minHeight="100vh" overflow="hidden" position="relative">
      <Aside />

      <Box
        ml="320px"
        overflow="auto"
        display="flex"
        flexDirection="column"
        flexGrow={1}
      >
        <Header />
        <Main />
        <Footer />
      </Box>
    </Box>
  );
};

export default MainTemplate;
