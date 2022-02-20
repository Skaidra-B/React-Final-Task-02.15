import React from 'react';

const ReviewElement = ({item}) => {
    return (
        <div className="review">
            <div><b>Rating: {item.rating}</b></div>
            <div>{item.comment}</div>
        </div>
    );
};

export default ReviewElement;