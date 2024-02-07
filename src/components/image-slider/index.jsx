import React, { useEffect, useState } from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";
import "./style.css"

export default function ImageSlider({url, limit=5, page=1}){

    const[images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const[errorMsg, setErrorMsg] = useState(null);
    const[loading, setLoading] = useState(false); //whenever working with expensive operations such as importing images or calculations always incorporate "Loading State"

    async function fetchImages(getUrl){

        try{
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();
            // console.log(data);

            if(data){
                setImages(data)
                setLoading(false)
            }
        }catch(e){
            setErrorMsg(e.message);
            setLoading(false)
        }

    }

    function handlePrevious(){
        setCurrentSlide(currentSlide === 0? images.length-1 : currentSlide-1) //images.length-1 is going to the last slide but current slide-1 is going to previous slide
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length-1 ? 0:  currentSlide+1 )
    }

    useEffect(()=>{
        if(url !=='') fetchImages(url) 
    },[url]);
    console.log(images)

    if(loading){
        return <div>Loading Data ! please wait</div>
    }

    if(errorMsg !== null){
        return <div>Error Occured !!{errorMsg}</div>
    }

    return <div className="container">

        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
        {
           images && images.length?
           images.map((imageItem, index)=>(  //why paranthesis used instead of curly braces? ans : when using the map function with arrow functions, make sure to either use parentheses for implicit return or include an explicit return statement when using curly braces.
            <img
            key={imageItem.id}
            alt ={imageItem.download_url}
            src={imageItem.download_url}
            className={currentSlide === index 
                ? "current-image" 
                : "current-image hide-current-image"
            }
            />
           ))
        : null}

        <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
        <span className="circle-indicators">
            {
                images && images.length? 
                images.map((_,index)=>(
                    <button
                        key={index}
                        className={
                            currentSlide===index
                            ?"current-indicator" 
                            :"current-indicator inactive-indicator"
                        }
                        onClick={()=>setCurrentSlide(index)}
                    ></button>
                ))
                :null
            }
        </span>

        

    </div>
}