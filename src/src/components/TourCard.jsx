import React, { useState } from "react";

const TourCard = ({ id, name, info, price, image, onRemove }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <div className="tour-card">
            <img src={image} alt={name} className="tour-image" />
            <div className="tour-details">
                <h2 className="tour-name">{name}</h2>
                <h4 className="tour-price">${price}</h4>
                <p className="tour-info">
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button
                        className="read-more-btn"
                        onClick={() => setReadMore(!readMore)}
                    >
                        {readMore ? " Show Less" : " Read More"}
                    </button>
                </p>
                <button className="not-interested-btn" onClick={() => onRemove(id)}>
                    Not Interested
                </button>
            </div>
        </div>
    );
};

export default TourCard;