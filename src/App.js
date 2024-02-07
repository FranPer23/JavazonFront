import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Navbar from "./navbar/Navbar";
import EmployeeForm from "./Employee/EmployeeForm";
import Employees from "./Employee/Employees";
import ItemDetail from "./Item/ItemDetail";
import AllItem from "./Item/AllItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="employeeform" element={<EmployeeForm />} />
          <Route path="allemployees" element={<Employees />} />
          <Route path="items" element={<AllItem />} />
          <Route path="itemdetail/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
