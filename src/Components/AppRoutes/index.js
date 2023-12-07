import { BrowserRouter, Route, Routes } from "react-router-dom";
import Insight from "../../Pages/Insight";
import Dashboard from "../../Pages/Dashbaord";
import Inventory from "../../Pages/Inventory";
import Resourse from "../../Pages/Resourse";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/resourse" element={<Resourse />}></Route>
      <Route path="/insight" element={<Insight />}></Route>
    </Routes>
  );
}
export default AppRoutes;
