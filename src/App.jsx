import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Process from "./Pages/Process";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Fruites from "./Pages/Fruites";
import Seafood from "./Pages/Seafood";
import Dairy from "./Pages/Dairy";
import PageWrapper from "./Components/PageWrapper";
import ScrollToTop from "./Components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import TopBtn from "./Components/TopBtn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /> </PageWrapper>} />
        <Route path="/process" element={<PageWrapper><Process /> </PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /> </PageWrapper>} />
        <Route path="/fruites" element={<PageWrapper><Fruites /> </PageWrapper>} />
        <Route path="/seafood" element={<PageWrapper><Seafood /> </PageWrapper>} />
        <Route path="/dairy" element={<PageWrapper><Dairy /> </PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick closeButton={true}  theme="colored" />
      <AnimatedRoutes />
      <TopBtn />
      <Footer />
    </Router>
  );
};

export default App;
