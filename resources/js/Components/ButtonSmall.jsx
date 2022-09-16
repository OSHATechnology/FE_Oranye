import React from "react";
import { Icon } from "@iconify/react";

const ButtonSmall = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={props.bgIcon +" rounded p-2"}>
                <Icon icon={props.icon} className={props.colorIcon + " text-xl"}></Icon>
            </button>
        </div>
    );
};

ButtonSmall.defaultProps ={
    bgIcon: "bg-gray-400",
    icon: "bi:arrow-through-heart-fill",
    colorIcon: "text-white"
}

export default ButtonSmall;
