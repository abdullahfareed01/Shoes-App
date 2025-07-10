import { useState } from "react";
import "../orderForm/OrderForm.css";
import { useNavigate } from "react-router-dom";
import { CartState } from "../context/Context";

function OrderForm() {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    contact: "",
    address: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim() || !/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Please enter a valid first name.";
    }

    if (!formData.lastName.trim() || !/^[a-zA-Z\s]+$/.test(formData.lastName)) {
      newErrors.lastName = "Please enter a valid last name.";
    }

    if (!/^[0-9]{10,15}$/.test(formData.contact)) {
      newErrors.contact = "Please enter a valid phone number.";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required.";
    }

    if (!formData.city.trim() || !/^[a-zA-Z\s]+$/.test(formData.city)) {
      newErrors.city = "Please enter a valid city name.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const productDetails = cart.map((item) => ({
      name: item.name,
      price: item.price,
      size: item.selectedSize,
    }));

    console.log("Final payload to Sheets:", {
      ...formData,
      productDetails,
    });

    try {
      await fetch("/.netlify/functions/submitOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          productDetails,
        }),
      });
    } catch (err) {
      console.error("Error saving to Google Sheets:", err);
    }

    setTimeout(() => {
      dispatch({ type: "CLEAR_CART" });
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <div className="form-container">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="order-form">
          <img src="logo.jpg" alt="" className="logo2" />
          <p className="form-subheading">
            Please fill in the details to complete your order.
          </p>

          <label>First Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-msg">{errors.name}</p>}

          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <p className="error-msg">{errors.lastName}</p>}

          <label>Contact Number</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          {errors.contact && <p className="error-msg">{errors.contact}</p>}

          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          {errors.address && <p className="error-msg">{errors.address}</p>}

          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          {errors.city && <p className="error-msg">{errors.city}</p>}

          <button type="submit" className="submit-btn">
            {isSubmitting ? "Placing your order..." : "Place Order"}
          </button>
        </form>
      ) : (
        <div className="thankyou-section">
          <h2>🎉 Thank you for your purchase!</h2>
          <p>Your order has been successfully placed. We’ll get in touch shortly.</p>
          <button onClick={() => navigate("/Shop")}>Continue Shopping</button>
        </div>
      )}
    </div>
  );
}

export default OrderForm;
