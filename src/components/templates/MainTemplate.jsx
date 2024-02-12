import Main from "../layouts/Main";
import Aside from "../layouts/Aside";
import { Wrapper } from "../UI";

const MainTemplate = () => {
  return (
    <Wrapper>
      <Aside></Aside>
      <Main></Main>
    </Wrapper>
  );
};

export default MainTemplate;
