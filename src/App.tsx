import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupEmail from "./pages/signup/SignupEmail";
import SignupDetails from "./pages/signup/SignupDetails";
import SignupPassword from "./pages/signup/SignupPassword";
import SignupVerify from "./pages/signup/SignupVerify";
import SignupApplicationStatus from "./pages/signup/SignupApplicationStatus";
import SellerLayout from "./pages/homePage/SellerLayout"; 
import DashboardPage from "./pages/homePage/DashboardPage"; 
import OrdersPage from "./pages/homePage/OrdersPage"
import ProductsPage from "./pages/homePage/ProductPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupEmail />} />
      <Route path="/signupdetails" element={<SignupDetails />} />
      <Route path="/signuppassword" element={<SignupPassword />} />
      <Route path="/signupverify" element={<SignupVerify />} />
      <Route path="/signupstatus" element={<SignupApplicationStatus />} />

       {/* seller  */}
      <Route path="/seller" element={<SellerLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
