import React, { FC } from "react";
import { Link } from "react-router-dom";
import ClassNameBuilder from "../Util/ClassNameBuilder";
import { HeaderProps } from "./Header.types";
import HeaderItem from "./HeaderItem";

const Header: FC<HeaderProps> = ({
    styleType,
    lighter,
    logoImg,
    logoText,
    leftChildren,
    rightChildren,
    className,
}) => {
    const classes = new ClassNameBuilder("header")
        .processProps({ styleType, lighter })
        .processClassName(className);
    let logoTextItem;
    if (!logoImg) {
        logoTextItem = <h1>{logoText ? logoText : "Home"}</h1>;
    } else if (logoText) {
        logoTextItem = <p>{logoText}</p>;
    }

    const leftChildrenItems = leftChildren
        ? leftChildren.map((child, i) => <HeaderItem key={i} {...child} />)
        : "";

    const rightChildrenItems = rightChildren
        ? rightChildren.map((child, i) => (
              <HeaderItem
                  key={i}
                  {...child}
                  className={i === 0 ? "mobile-row-end" : ""}
              />
          ))
        : "";

    return (
        <header className={classes.getClassString()}>
            <div className="header-logo">
                <Link to="/">
                    {logoImg && <img src={logoImg} />}
                    {logoTextItem}
                </Link>
            </div>
            <div className="header-items">
                {leftChildrenItems}
                {rightChildrenItems}
            </div>
        </header>
    );
};

export default Header;
