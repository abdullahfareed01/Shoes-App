import { useState } from "react";
import favorite from "../../assets/favorite.svg"; // ✅
import "./Shop.css";
import search from "../../assets/search.svg";

import cart1 from "/cart1.svg";
import data from "../ImagesData.json";
import { CartState } from "../../context/Context";
import ProductSliderModal from "../../ProductSlider/ProductSliderModal";
import { useNavigate } from "react-router-dom";
import ImageWithLoader from "../../Loader/ImageWithLoader";


function Shop() {
  const navigate=useNavigate();
  const { state: { cart }, dispatch } = CartState();
  const [selectedItem, setSelectedItem] = useState(null); 

  return (
    <>
      <div className="shop">
        <h1>SHOP NOW</h1>
        <p className="subheading-p">Latest in 2025</p>
        <div className="watches-card">
          {data.watch.map((item) => (
            <div
              className="item"
              key={item.id}
              
            >

              <ImageWithLoader src={item.src} alt={item.name} className="watch-img" />

              <div className="details">
                <div className="svgs">
                  <img src={favorite} alt="" className="fav" />
                  <img src={cart1} alt="" className="cart" />
                  <img src={search} alt="" className="search" />
                </div>
                <h2>{item.name}</h2>
                <div className="line" />
                <p>{item.price} PKR</p>

              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  setSelectedItem(item); 
                }}
              >
                Select Size
              </button>


              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <ProductSliderModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </>
  );
}

export default Shop;
