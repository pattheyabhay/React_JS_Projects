import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import "./style.css";


export default function StarRating({noOfStars = 5}){ //by default 5 stars
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)
    }

    function handleMouseLeave(getCurrentIndex){
        setHover(rating)
    }

    return <div className="star-rating">
        {
            [...Array(noOfStars)].map((_,index)=> { //In this case, since we are not using the element (_ is a convention to indicate that the value is not being used), we are only interested in the index.
                index +=1;
                
                return<FaStar 
                key={index}
                className= {index <= (hover || rating) ? 'active' : 'inactive'}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave(index)}
                size={40}
                />
            })
        }
    </div>
}