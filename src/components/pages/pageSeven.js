import React, {useRef} from "react";
import { Link } from "react-router-dom";
import "../../slyles/pages.css";



const PageSeven = () => {
    const inputEl = useRef(null);
    const mouseOver = () => {
      inputEl.current.focus();
    };
    return (
  <div>
    <div className="flexMid focus">
        <input className="nptFocus" ref={inputEl} type="text" />
        <button className="btnFocus" onMouseOver={mouseOver}>Установить фокус на поле ввода</button>
    </div>
    <Link className="top violet" to="/">
      Go to START
    </Link>
  </div>
    );
}



export default PageSeven;
