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
import OrdersPage from "./pages/homePage/order/OrdersPage";
import ProductsPage from "./pages/homePage/product/ProductPage";
import EditProductPage from "./pages/homePage/product/EditProductPage";
import SignupApplicationRejected from "./pages/signup/SignupApplicationStatusRejected";
import SignupApplicationSuccess from "./pages/signup/SignupApplicationStatusApproved";
import SignupApplicationPending from "./pages/signup/SignupApplicationStatusPending";
import ViewProductPage from "./pages/homePage/product/ViewProductPage";
import OrderDetailPage from "./pages/homePage/order/OrderDetailsPage";
import CreateProductPage from "./pages/homePage/product/CreateProductPage";
import BulkUploadPage from "./pages/homePage/product/BulkUpload";
import StoreFrontPage from "./pages/homePage/StorefrontPage";
import WalletPage from "./pages/homePage/WalletPage";
import KYCPage from "./pages/homePage/KYCPage";
import AccountSettingsPage from "./pages/homePage/AccountSettingsPage";
import SupportPage from "./pages/homePage/SupportPage";
import CustomerReviewsPage from "./pages/homePage/product/CustomerReviewsPage";

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
      <Route
        path="/signupstatus/pending"
        element={<SignupApplicationPending />}
      />
      <Route
        path="/signupstatus/approved"
        element={<SignupApplicationSuccess />}
      />
      <Route
        path="/signupstatus/rejected"
        element={<SignupApplicationRejected />}
      />

      {/* seller  */}
      <Route path="/seller" element={<SellerLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="orders/:orderId" element={<OrderDetailPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:productId/edit" element={<EditProductPage />} />
        <Route path="products/:productId/view" element={<ViewProductPage />} />
        <Route path="products/create" element={<CreateProductPage />} />
        <Route path="products/edit" element={<EditProductPage />} />
        <Route path="bulkupload" element={<BulkUploadPage />} />
        <Route path="storefront" element={<StoreFrontPage />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="kyc" element={<KYCPage />} />
        <Route path="accountsettings" element={<AccountSettingsPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="products/:productId/reviews" element={<CustomerReviewsPage />} />

      </Route>
    </Routes>
  );
}

export default App;


