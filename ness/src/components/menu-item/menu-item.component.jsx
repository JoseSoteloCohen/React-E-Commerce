import React from "react";
import { withRouter } from 'react-router-dom';
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className="background-image"/>
        <div className="content">
            <h2 className="title">{title.toUpperCase()}</h2>
            <h3 className="subtitle">SHOP NOW</h3>
        </div>
    </div>
)
export default withRouter(MenuItem);