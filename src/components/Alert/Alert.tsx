import React, { FC } from "react";
import ClassNameBuilder from "../Util/ClassNameBuilder";
import { AlertProps } from "./Alert.types";

const Alert: FC<AlertProps> = ({
    text,
    styleType,
    showClose,
    className,
    onClick,
}) => {
    let classes = new ClassNameBuilder("alert")
        .processProps({ styleType })
        .processClassName(className);

    return (
        <div className={classes.getClassString()}>
            <span>{text}</span>
            {showClose && (
                <button className="close" onClick={onClick}>
                    x
                </button>
            )}
        </div>
    );
};

export default Alert;
