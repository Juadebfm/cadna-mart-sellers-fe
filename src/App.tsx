import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const SignupEmail = lazy(() => import("./pages/signup/SignupEmail"));
const SignupDetails = lazy(() => import("./pages/signup/SignupDetails"));
const SignupPassword = lazy(() => import("./pages/signup/SignupPassword"));
const SignupVerify = lazy(() => import("./pages/signup/SignupVerify"));
const SignupComplete = lazy(() => import("./pages/signup/SignupComplete"));
const SignupApplicationStatus = lazy(
  () => import("./pages/signup/SignupApplicationStatus")
);

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup">
          <Route index element={<SignupEmail />} />
          <Route path="details" element={<SignupDetails />} />
          <Route path="password" element={<SignupPassword />} />
          <Route path="verify" element={<SignupVerify />} />
          <Route path="complete" element={<SignupComplete />} />
          <Route path="status" element={<SignupApplicationStatus />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
