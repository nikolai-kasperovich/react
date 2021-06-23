import  React from "react"
import ContentBlock from "../components/home/index"
import { RESPONSE } from "../helper"

const HomeContainer = () => {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
  
    const onReady = (event) => {
      event.target.pauseVideo();
    };
  
    return <ContentBlock content={RESPONSE} opts={opts} onReady={onReady} />;
  };
  
  export default HomeContainer;