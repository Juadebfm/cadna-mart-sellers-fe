import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupEmail from "./pages/Sign up/SignupEmail";
import SignupDetails from "./pages/Sign up/SignupDetails";
import SignupPassword from "./pages/Sign up/SignupPassword";
import SignupVerify from "./pages/Sign up/signupVerify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupEmail />} />
      <Route path="/signupdetails" element={<SignupDetails />} />
      <Route path="/signuppassword" element={<SignupPassword />} />
      <Route path="/signupverify" element={<SignupVerify />} />
    </Routes>
  );
}

export default App;
