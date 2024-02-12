import { Box } from "@mui/material";
import Test from "../blocks/Test";
import Lectures from "../blocks/Lectrues";
import { v4 as uuid } from "uuid";

const tests = [
  {
    title: "1",
    description: "descr",
    id: uuid(),
    variants: [
      { title: "Вариант1", id: uuid() },
      { title: "Вариант2", id: uuid() },
      { title: "Вариант3", id: uuid() },
    ],
  },
  //   {
  //     title: "2",
  //     description: "descr",
  //     id: uuid(),
  //     variants: [
  //       { title: "Вариант4", id: uuid() },
  //       { title: "Вариант5", id: uuid() },
  //       { title: "Вариант6", id: uuid() },
  //     ],
  //   },
];

const Main = () => {
  return (
    <main
      sx={{ backgroundColor: "#5b6677", minHeight: "100vh", overflowY: "auto" }}
    >
      <Lectures></Lectures>
      {tests.map((test) => (
        <Test
          key={test.id}
          title={test.title}
          description={test.description}
          variants={test.variants}
        ></Test>
      ))}
    </main>
  );
};

export default Main;
