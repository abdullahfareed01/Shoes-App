import  { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./SliderModal.css";
import { CartState } from "../context/Context";
import "../Pages/Shop/Shop.css";
import { useNavigate } from "react-router-dom";
import ImageWithLoader from "../Loader/ImageWithLoader";




function ProductSliderModal({ item, onClose }) {

  const navigate = useNavigate();

  const { state: { cart }, dispatch } = CartState();  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const phone = "923160200925";
  const message = `Hi, I'm interested in *${item.name}*%0AHere's the product: https://yourshop.com/product/${item.id}`;
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, selectedSize },
    });
    console.log("Dispatched to cart:", { ...item, selectedSize });

  };

  const handleRemoveFromCart = (e) => {
  e.stopPropagation();
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: { ...item, selectedSize }, 
  });
};


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>

        <Swiper
          spaceBetween={10}
          navigation={true}
          autoplay={{ delay: 2500 }}
          loop={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs, Autoplay]}
          className="main-slider"
        >
          {item.images.map((src, i) => (
            <SwiperSlide key={i}>
              {/* <img src={src} alt="" className="main-img" /> */}
              <ImageWithLoader src={src} alt={item.name} className="main-img" />

            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="thumb-slider"
        >
          {item.images.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt="" className="thumb-img" />
            </SwiperSlide>
          ))}
        </Swiper>

        <h1>{item.name}</h1>
        <p className="prod-subheading"> Brown & white Nike sneakers for a clean everyday look.</p>
        <h3>{`Rs: ${item.price}`}</h3>
        {/* <br /> */}
        <h4>Select Size:</h4>
            <div className="sizes">
              {item.sizes?.map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(size);
                  }} 
                >
                  {size}
                </button>
              ))}
            </div>

        {/* ✅ Add or Remove from Cart */}
        {cart.some((i) => i.id === item.id) ? (
          <button className="removeWatch" onClick={handleRemoveFromCart}>
            Remove
          </button>
        ) : (
          <button className="addWatch" onClick={handleAddToCart}>
            Add to cart
          </button>
        )}

        <button
          className="buy-now"
          onClick={(e) => {
            e.stopPropagation();
            if (!selectedSize) {
              return alert("Please select a size first!");
            }
            if (!cart.some(i => i.id === item.id)) {
              dispatch({
                type: "ADD_TO_CART",
                payload: { ...item, selectedSize }
              });
            }
            navigate("/checkout");
          }}
        >
          Buy Now
        </button>


      </div>
    </div>
  );
}

export default ProductSliderModal;
