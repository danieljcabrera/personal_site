import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home";

// Components
import Header from "./components/header";
import Footer from "./components/footer";
import ButtonToTop from "./components/button-to-top";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ButtonToTop />
      <Footer />
    </Router>
  );
}

export default App;
