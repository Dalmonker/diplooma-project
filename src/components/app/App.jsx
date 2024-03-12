import MainPage from "../pages/MainPage";
import AdminPage from "../pages/AdminPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/:lesson" element={<MainPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
};

export default App;
