import React, { useState , useEffect } from "react";
import "./CarouselSlide.css";
import data from "../ImagesData.json"

function CarouselSlide({}){
    const [slide , setSlide]=useState(0);

    useEffect(()=>{
        const interval= setInterval(()=>{
            console.log("change")
            setSlide(prevSlide => (prevSlide===data.slides.length-1 ? 0 : prevSlide +1))
        },4400);
        return() => clearInterval(interval);
    },[data.slides.length])
        
    const nextSlide=()=>{
        if(slide<2){
            setSlide(slide+1)
        }
        else{
            return setSlide(slide-2);
        }
    }

    const prevSlide=()=>{
        if(slide>0){
            setSlide(slide-1)
        }

        else{
            setSlide(slide+2)
        }

        

    }
return(<><div className="hero-section">

        <div className="slider-image">

            <div className="arrowLeft" onClick={prevSlide}/>
            {data.slides.map((item,index)=>{
                return <img src={item.src} alt={item.alt} key={index} className={slide == index ? "slide" : "slide slide-hidden"}/>
            })}


            <div className="arrowRight" onClick={nextSlide}/>
            
            {data.slides.map((item,index)=>{
            
                console.log(item.name);
                return <h1 key={index} className={slide===index ? "heading" : " heading hero-heading"}>{item.name}</h1>
            })}


            </div>

        </div></>);

}

export default CarouselSlide;

