import React, { FC } from "react";
import ClassNameBuilder from "../Util/ClassNameBuilder";
import { CardProps } from "./Card.types";

const Card: FC<CardProps> = ({
    title,
    styleType,
    lighter,
    sub,
    className,
    innerClassName,
    children,
}) => {
    let mainClasses = new ClassNameBuilder("card")
        .add(sub ? "sub" : "")
        .processClassName(className);

    let titleClasses = new ClassNameBuilder("card-title").processProps(
        {
            styleType,
            lighter,
        },
        true
    );

    let bodyClasses = new ClassNameBuilder("card-body").processClassName(
        innerClassName
    );
    return (
        <div className={mainClasses.getClassString()}>
            <div className={titleClasses.getClassString()}>{title}</div>
            <div className={bodyClasses.getClassString()}>{children}</div>
        </div>
    );
};

export default Card;
