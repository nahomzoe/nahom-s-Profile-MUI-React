import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home";

import CountriesList from "./components/CountriesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="countriesList" element={<CountriesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
