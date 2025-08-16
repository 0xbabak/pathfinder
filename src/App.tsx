import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Legal from "./pages/Legal";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
