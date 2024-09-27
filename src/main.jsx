import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingPage from "./pages/LandingPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Articles from "./pages/Articles";

const router = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/articles/:slug",
    element: <Articles />,
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {router.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Router>
  </StrictMode>
);
