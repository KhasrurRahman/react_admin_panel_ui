import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Dashboard from "./pages/dashboard/Dashboard";
import UserList from "./pages/userList/UserList";

function App() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/userlist" element={<UserList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
