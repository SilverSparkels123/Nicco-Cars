import "./App.css";
import MainFooter from "./components/Footer/MainFooter";
import ContactUs from "./components/ContactUs/ContactUs";
import MainHeader from "./components/MainHeader/MainHeader.jsx";
import { SubmitContextProvider } from "./components/store/submit-context";
import { SignUpContextProvider } from "./components/store/signup-context";
import Home from "./pages/Home";
import ContactUsPage from "./pages/ContactUsPage";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import { LogInContextProvider } from "./components/store/login-context";

function App() {
  return (
    <div className="App">
      <SignUpContextProvider>
        <LogInContextProvider>
          <MainHeader />
        </LogInContextProvider>
      </SignUpContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <SubmitContextProvider>
        <ContactUs />
      </SubmitContextProvider>
      <MainFooter />
    </div>
  );
}

export default App;
