import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupEmail from "./pages/signup/SignupEmail";
import SignupEmailVerification from "./pages/signup/SignupEmailVerification";
import SignupDetails from "./pages/signup/SignupDetails";
import SignupPassword from "./pages/signup/SignupPassword";
import SignupVerify from "./pages/signup/SignupVerify";
import SignupApplicationStatus from "./pages/signup/SignupApplicationStatus";
import SellerLayout from "./pages/homePage/SellerLayout"; 
import DashboardPage from "./pages/homePage/DashboardPage"; 
import OrdersPage from "./pages/homePage/OrdersPage"
import ProductsPage from "./pages/homePage/product/ProductPage"
import EditProductPage from "./pages/homePage/product/EditProductPage";
import SignupApplicationRejected from "./pages/signup/SignupApplicationStatusRejected";
import SignupApplicationSuccess from "./pages/signup/SignupApplicationStatusApproved";
import SignupApplicationPending from "./pages/signup/SignupApplicationStatusPending";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupEmail />} />
      <Route path="/signupemailverify" element={<SignupEmailVerification />} />      
      <Route path="/signupdetails" element={<SignupDetails />} />
      <Route path="/signuppassword" element={<SignupPassword />} />
      <Route path="/signupverify" element={<SignupVerify />} />
      <Route path="/signupstatus" element={<SignupApplicationStatus />} />
      <Route path="/signupstatus/pending" element={<SignupApplicationPending />} />
      <Route path="/signupstatus/approved" element={<SignupApplicationSuccess />} />
      <Route path="/signupstatus/rejected" element={<SignupApplicationRejected />} />

       {/* seller  */}
      <Route path="/seller" element={<SellerLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId/edit" element={<EditProductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
