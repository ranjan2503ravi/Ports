import React from "react";
import Layout from "./Layout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Context from "./pages/Context";
import Params from "./pages/Params";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Context />} />
      <Route path="/:ca" element={<Params />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
