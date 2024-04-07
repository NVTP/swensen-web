import { Routes, Route, Navigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { lazy, Suspense } from "react";

const ProtectLayout = lazy(() => import("./Components/ProtectLayout"));

function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Suspense fallback={null}>
            <ProtectLayout />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default App;
