import "./Home.css"
import CarouselSlide from "../CarouselSlide/CarouselSlide";
import "../CarouselSlide/CarouselSlide.css"
import { slides } from "../ImagesData.json";
import { featured } from "../ImagesData.json";
import FeaturedProduct from "../featuredProduct/FeaturedProduct";
function Home(){
    return(<>
        <div className="hero-section">
            <CarouselSlide  data={slides}/>
        </div>
        <div className="featured">
        <FeaturedProduct data={featured}/>
        </div>

    </>);

}

export default Home;