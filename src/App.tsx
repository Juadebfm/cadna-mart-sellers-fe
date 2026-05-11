import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupEmail from "./pages/signup/SignupEmail";
import SignupDetails from "./pages/signup/SignupDetails";
import SignupPassword from "./pages/signup/SignupPassword";
import SignupVerify from "./pages/signup/SignupVerify";

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
