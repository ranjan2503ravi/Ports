import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ParticlesBackground from "./Components/ParticlesBackground";
import Layout from "./Layout";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./components/Contact";
import Resume from "./Components/Resume";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="project" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    )
  );

  return (
    <div className="relative min-h-screen bg-white text-black">
      <ParticlesBackground />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;