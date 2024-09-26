import { useLoginContext } from "../contexts/LoginContext";
import PrivateRoute from "../components/privateRoute/PrivateRoute";
import Login from "../pages/login/Login";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Journal from "../pages/journal/Journal";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "../pages/cart/Cart";
import Home from "../pages/home/Home";
import Store from "../pages/store/Store";
import Product from "../pages/product/Product";
import Register from "../pages/register/Register";

function RoutingSystem() {
  const { isLogin } = useLoginContext();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="store" element={<Store />}></Route>
        <Route path="product/:id" element={<Product />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="journal" element={<Journal />}></Route>
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default RoutingSystem;
