import { Routes, Route } from "react-router";
import ContentSection from "./Pages/ContentPage";
import WelcomePage from "./Pages/WelcomePage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />}></Route>
      <Route path="/content" element={<ContentSection />}></Route>
    </Routes>
  );
}
