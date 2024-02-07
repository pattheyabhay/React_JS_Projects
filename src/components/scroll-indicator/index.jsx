import { useEffect, useState } from "react"
import "./scroll.css"

export default function ScrollIndicator({url}){

    const [data , setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl){
        try{
            setLoading(true);
            const response = await fetch(getUrl);
            const data = await response.json();
            // console.log(data);

            if(data && data.products && data.products.length > 0){
                setData(data.products)
                setLoading(false)
            }

        }catch(e){
            console.log(e)
            setErrorMessage(e.message)
        }
    }

    function handleScrollPercentage() {
        console.log(
            document.body.scrollTop,              // Scroll position of the body
            document.documentElement.scrollTop,  // Scroll position of the document's root element
            document.documentElement.scrollHeight,  // Total height of the document's root element
            document.documentElement.clientHeight  // Viewport height of the document's root element
            //These properties are useful when working with scroll events or implementing features based on the scroll position, such as determining how far the user has scrolled down the page or calculating the scroll percentage.
        );

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled/height) * 100)
    }

    useEffect(()=>{
        fetchData(url)
    }, [url])

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollPercentage)

        return ()=>{
            window.removeEventListener('scroll', ()=>{})
        }
    },[])
        console.log(data, scrollPercentage);

        if (errorMessage) {
            return <div>
                Error Occured !! {errorMessage}
            </div>
        }

        if (loading) {
            return <div>
                Loading Data !! Please wait !!
            </div>
        }


    return(
        <div>
            <div className="top-container">

                <h1>Custom Scroll Indicator</h1>
                <div className="scroll-progress-tracking-container">
                    <div className="current-progress-bar" style={{width: `${scrollPercentage}%`}}>    
                    </div>
                </div>

            </div>

            <div className="data-container">
                {
                    data && data.length > 0 
                    ? data.map(dataItem => <p>{dataItem.title}</p>)
                    :null
                }
            </div>
        </div>
    )
}