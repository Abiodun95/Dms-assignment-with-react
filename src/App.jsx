import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./components/pages/register/Register";
import Login from "./components/pages/login/Login"
import Dashboard from "./components/pages/dashboard/Dashboard"
import Forgetpassword from "./components/pages/forgetpassword/Forgetpassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Register />} />
          <Route index path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
