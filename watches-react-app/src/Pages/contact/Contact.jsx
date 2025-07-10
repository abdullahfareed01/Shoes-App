import "../contact/Contact.css";
import { useNavigate } from "react-router-dom";

function Contact(){

  const navigate=useNavigate();


    return(<>
    
    <div className="contact-page">

        <h2>Under development!!</h2>
        <p className="call">call: 0316 0200925</p>
        <p className="Email-address">Email: zyrostoreofficial@gmail.com</p>
        <button className="buy-now" onClick={()=> navigate("/Shop")}> continue shopping </button>

    </div>
    

</>);

}

export default Contact;