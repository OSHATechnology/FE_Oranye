import React from "react";
import { Icon } from "@iconify/react";

const SimpleCard = (props) => {
    return (
        <div className=" w-80 h-36 rounded shadow">
            <div className="p-6">
                <div>
                    <h3 className="text-base font-medium text-gray-500">
                        {props.title}
                    </h3>
                </div>
                <div className="flex my-2 items-center">
                    <Icon icon={props.icon} className="text-xl mr-2" />
                    <p className="text-xl font-bold ">{props.count}</p>
                </div>
            </div>
        </div>
    );
};

export default SimpleCard;
