import Navigation from "./components/Navigation";
import About from "./pages/About";
import NoteTaking from "./pages/NoteTaking";
import Index from "./pages/Index.jsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/note-taking" element={<NoteTaking />} />
      </Routes>
    </Router>
  );
}

export default App;
