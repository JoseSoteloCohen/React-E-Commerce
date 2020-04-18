import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className="background-image"/>
        <div className="content">
            <h2 className="title">{title.toUpperCase()}</h2>
            <h3 className="subtitle">SHOP NOW</h3>
        </div>
    </div>
)
export default MenuItem;