import React from "react";
import { PhoneIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const TopNavInfo = ({ className, icon, value }) => {
    return (
        <div className={
            clsx(
                "flex items-center gap-x-2 text-white hover:text-orange-50",
                className
            )
        }>
            <dt className="flex-none">
                {icon}
            </dt>
            <dd>
                <a className="text-sm" href={
                    icon === <PhoneIcon className="w-5 h-5" />
                        ? `tel:${value}`
                        : `mailto:${value}`
                }>
                    {value}
                </a>
            </dd>
        </div>
    );
};

export default TopNavInfo;