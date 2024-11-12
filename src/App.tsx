import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SpaceNotFound from "./pages/SpaceNotFound";
import GlitchNotFound from "./pages/GlitchNotFound";
import MinimalIllustrationNotFound from "./pages/MinimalIllustrationNotFound";
import PuzzleNotFound from "./pages/PuzzleNotFound";
import CyberpunkNotFound from "./pages/CyberpunkNotFound";
import NatureNotFound from "./pages/NatureNotFound";
import RetroGameNotFound from "./pages/RetroGameNotFound";
import MinimalTypoNotFound from "./pages/MinimalTypoNotFound";
import ThreeDInteractiveNotFound from "./pages/ThreeDInteractiveNotFound";
import OrigamiNotFound from "./pages/OrigamiNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404-space" element={<SpaceNotFound />} />
        <Route path="/404-glitch" element={<GlitchNotFound />} />
        <Route path="/404-minimal" element={<MinimalIllustrationNotFound />} />
        <Route path="/404-puzzle" element={<PuzzleNotFound />} />
        <Route path="/404-cyberpunk" element={<CyberpunkNotFound />} />
        <Route path="/404-nature" element={<NatureNotFound />} />
        <Route path="/404-retro" element={<RetroGameNotFound />} />
        <Route path="/404-typo" element={<MinimalTypoNotFound />} />
        <Route path="/404-3d" element={<ThreeDInteractiveNotFound />} />
        <Route path="/404-origami" element={<OrigamiNotFound />} />
        <Route path="*" element={<SpaceNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
