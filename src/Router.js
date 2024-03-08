import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { HelmetProvider } from "react-helmet-async";

const Router = () => {
  return (
    <HelmetProvider>
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

    </BrowserRouter>
    </HelmetProvider>
  );
};

export default Router;
