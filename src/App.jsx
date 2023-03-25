import { useEffect } from "react";
import Hero from "./components/Hero";
import Subscribe from "./components/Subscribe";
import aos from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<><Hero /> <Subscribe /></>}/>
        <Route path="/productlist" element={<ProductList />}/>
        <Route path="/productlist/:id" element={<SingleProduct />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;