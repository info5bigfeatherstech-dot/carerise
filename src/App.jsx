import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ComingSoon from "./components/layout/ComingSoon";
import Home from "./pages/Home";
import About from "./pages/About";
import AnimalCare from "./pages/AnimalCare";
import Environment from "./pages/Environment";
import Adopt from "./pages/Adopt";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";

/** Defines the home page and working destinations for every main navigation link. */
export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <a
        href="#main-content"
        className="sr-only z-[80] rounded-full bg-white px-4 py-2 text-brand focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:ring-2 focus:ring-accent"
      >
        Skip to main content
      </a>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <main id="main-content">
              <About />
            </main>
          }
        />
        <Route
          path="/animal-care"
          element={
            <main id="main-content">
              <AnimalCare />
            </main>
          }
        />
        <Route
          path="/environment"
          element={
            <main id="main-content">
              <Environment />
            </main>
          }
        />
        <Route
          path="/adopt"
          element={
            <main id="main-content">
              <Adopt />
            </main>
          }
        />
        <Route
          path="/get-involved"
          element={
            <main id="main-content">
              <GetInvolved />
            </main>
          }
        />
        <Route
          path="/contact"
          element={
            <main id="main-content">
              <Contact />
            </main>
          }
        />
        <Route
          path="/programs"
          element={<Navigate to="/animal-care" replace />}
        />
        <Route
          path="/volunteer"
          element={<Navigate to="/get-involved" replace />}
        />
        <Route path="*" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </div>
  );
}
