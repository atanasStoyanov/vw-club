import React from 'react';

const SmallParagraph = ({label, value}) => {
    return (
        <p>
            <span><small>{label}:</small> {value}</span>
        </p>
    )
}

export default SmallParagraph;