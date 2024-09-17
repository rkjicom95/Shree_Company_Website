import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contacts from "./pages/contact/Contacts";
import PaidMarketing from "./pages/paid_marketing/PaidMarketing";
import SoftwareDevelopment from "./pages/software_development/SoftwareDevelopment";
import WebsiteDesigning from "./pages/website_designing/WebsiteDesigning";
import SearchEngine from "./pages/search_engine /SearchEngine";
import SocialMedia from "./pages/social_media/SocialMedia";
import AppDevelopment from "./pages/app_development/AppDevelopment";
import UiDesign from "./pages/ui_design/UiDesign";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/paidMarketing" element={<PaidMarketing />} />
          <Route
            path="/softwareDevelopment"
            element={<SoftwareDevelopment />}
          />
          <Route path="/websiteDesigning" element={<WebsiteDesigning />} />
          <Route path="/searchEngine" element={<SearchEngine />} />
          <Route path="/socialMedia" element={<SocialMedia />} />
          <Route path="/appDevelopment" element={<AppDevelopment />} />
          <Route path="/uiDesign" element={<UiDesign />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
