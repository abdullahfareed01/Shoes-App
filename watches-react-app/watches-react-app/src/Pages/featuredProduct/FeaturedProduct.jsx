import React, { useEffect, useRef } from "react";
import "../featuredProduct/FeaturedProduct.css";
import { Link } from "react-router-dom";
import data from "../ImagesData.json";
import ImageWithLoader from "../../Loader/ImageWithLoader";

function FeaturedProduct() {
  const scrollRef = useRef(null);
  const watchData = data.watch;
  const infiniteItems = [...watchData, ...watchData, ...watchData]; 

  useEffect(() => {
    const slider = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (!slider) return;

      slider.scrollLeft += 1;

      if (slider.scrollLeft >= slider.scrollWidth / 3) {
        slider.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="featured-product-container">
      <h1 className="featured-heading">FEATURED PRODUCTS</h1>
      <div className="featured-slider-wrapper" ref={scrollRef}>
        <div className="featured-slider no-animation">
          {infiniteItems.map((item, index) => (
            <Link to="/Shop" className="f-item" key={index}>
              <div className="f-image-wrap">
                <ImageWithLoader src={item.src} alt={item.name} className="f-image" />
              </div>
              <h2 className="f-name">{item.name}</h2>
              <p className="f-price">{item.price} PKR</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProduct;
