import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar.jsx";
import Shop from "./Pages/Shop/Shop.jsx";
import Home from "./Pages/Home/Home.jsx";
import Contact from "./Pages/contact/Contact.jsx";
import SideCart from "./cart/SideCart.jsx";
import Footer from "./footer/Footer.jsx";
import Polo from "./polo/Polo.jsx";
import OrderForm from "./orderForm/OrderForm.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Polo" element={<Polo />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/SideCart" element={<SideCart />} />
        <Route path="/CheckOut" element={<OrderForm/>}></Route>
        <Route path="/ProductSliderModal"></Route>
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
