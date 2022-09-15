import React from "react";
import { Icon } from "@iconify/react";

const ButtonNormal = (props) => {
    return (
        <div>
            <button className={"flex rounded pl-1 pr-3 py-1 items-center " + props.bgIcon + props.textColor + props.widthIcon}>
                <Icon icon={props.icon} className={props.iconColor + " text-2xl"} />
                <span>{props.text}</span>
            </button>
        </div>
    );
};

ButtonNormal.defaultProps = {
    bgIcon: "bg-gray-400 ",
    widthIcon: "w-fit ",
    textColor: "text-white ",
    icon: "bi:arrow-through-heart-fill",
    colorIcon: "text-white",
    text: "Button"
}

export default ButtonNormal;
