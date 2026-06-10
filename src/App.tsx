import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { Home } from "@/pages/Home";
import { Create } from "@/pages/Create";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="book-to-life-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
