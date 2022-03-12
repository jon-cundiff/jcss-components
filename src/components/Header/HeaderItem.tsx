import React, { FC } from "react";
import { HeaderItem } from "./Header.types";
import { Link } from "react-router-dom";

const HeaderItem: FC<HeaderItem> = ({
    text,
    link,
    external,
    itemChildren,
    className,
}) => {
    const childrenItems = itemChildren
        ? itemChildren.map((child, i) => <HeaderItem key={i} {...child} />)
        : "";

    let linkItem;
    if (link) {
        linkItem = external ? (
            <a href={link}>{text}</a>
        ) : (
            <Link to={link}>{text}</Link>
        );
    } else if (itemChildren) {
        // TODO implement dropdown to handle this effectively
        linkItem = (
            <>
                <p className="dropdown">{text}</p>
                <div className="dropdown-items">{childrenItems}</div>
            </>
        );
    } else {
        <p>{text}</p>;
    }

    return <div className="header-item">{linkItem}</div>;
};

export default HeaderItem;
