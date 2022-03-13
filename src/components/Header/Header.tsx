import React, { FC } from "react";
import { useState } from "react";
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
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!active);
    };

    const itemsClasses = new ClassNameBuilder("header-items");
    const toggleClasses = new ClassNameBuilder("mobile-toggle");

    if (active) {
        itemsClasses.add("active");
        toggleClasses.add("active");
    }

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
            <div className={itemsClasses.getClassString()}>
                {leftChildrenItems}
                {rightChildrenItems}
            </div>
            <button
                className={toggleClasses.getClassString()}
                onClick={handleToggle}
            >
                <span className="toggle-box">
                    <span className="toggle-inner"></span>
                </span>
            </button>
        </header>
    );
};

export default Header;
