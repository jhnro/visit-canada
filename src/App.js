import "./App.css";
import Header from "./components/Header";
import React from "react";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Hero from "./components/Hero";
import Features from "./components/Features";
// import Carousel from './components/Carousel';
import Economy from "./components/Economy";
import Footer from "./components/Footer";
import Caruselos from "./components/Caruselos";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Main />
      <Features />
      <Caruselos />
      <Economy />
      <Footer />
      <Routes>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
