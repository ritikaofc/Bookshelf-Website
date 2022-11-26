import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Destination from "./components/destinations/Destination";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";
import Help from "./components/help/Help";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destination />
      <Search />
      <Help />
      <Footer />
    </div>
  );
}

export default App;
