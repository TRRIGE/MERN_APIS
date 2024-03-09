import Navbar from "./components/Navbar";
import "./App.css";
import CodeForInterview from "./components/CodeForInterview";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/" element={<CodeForInterview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
