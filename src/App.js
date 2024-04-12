import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./global/layouts/SharedLayout";

import Graf from "./pages/Graf";
import Home from "./pages/Home";
import Error from "./pages/Erros";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<Error />} />

            <Route path="/graf" element={<Graf />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App