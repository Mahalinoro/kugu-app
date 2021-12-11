import React from "react";
import "../assets/css/spinner.css";

const Spinner = () => {
    return (
        <div className="spinner">
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner;