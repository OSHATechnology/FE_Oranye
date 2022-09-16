import React from "react";
import { Icon } from "@iconify/react";

const ButtonNormal = (props) => {
    return (
        <div>
            <button className={"flex rounded px-2 py-1 items-center text-center " + props.bgIcon + props.textColor + props.widthIcon}>
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
    icon: " ",
    colorIcon: "text-white",
    text: "Button"
}

export default ButtonNormal;
