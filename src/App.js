import { HashRouter, Route, Routes } from "react-router-dom";
import { ExceptionEx } from "./components/ex/ExceptionEx";
import { UseEffectEx } from "./components/ex/UseEffectEx";
import { Home } from "./pages/home/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <HashRouter>
      {/* <UseEffectEx /> */}
      {/* <ExceptionEx /> */}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};

export default App;
