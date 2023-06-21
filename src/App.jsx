import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contacts" element={<Contacts />}></Route>
          <Route path="/products/*" element={<Products />}></Route>
          <Route path="/search" element={<SearchResults/>}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
