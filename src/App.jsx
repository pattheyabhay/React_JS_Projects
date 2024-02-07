import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/dark-light-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-tests";

function App() {
  return (
    <div className="App" >
      {/* Accordian Component*/}
      {/* <Accordian />  */}

      {/* Random Color Component */}
      {/* <h1>This displays random colors as per user selection</h1>
      <RandomColor /> */}

      {/* star rating component */}
      {/* <h1>Shows how rating star component works</h1>
      {<StarRating noOfStars={10}/>}
      <br /> */}

      {/* Image-Slider component */}
      {/* <h1>Below carousal shows how image slider works</h1>
      <ImageSlider
        url={"https://picsum.photos/v2/list/"}
        page={"1"}
        limit={"15"}
      /> */}

      {/* Load-More-Data component */}
      {/* <LoadMoreData/> */}

      {/* tree-view component / Menu UI component / recurrsive Navigation component */}
      {/* <TreeView menus={menus}/> */}
    
      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light- Dark Theme Mode */}
      {/* <LightDarkMode/> */}

      {/* Scroll Indicator component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* custom - Tabs */}
      {/* <TabTest /> */}

    </div>
  );
}

export default App;
