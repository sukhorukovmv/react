import React from "react";

export default function Merchandises(props) {
    let merchandisesElement = props.merchandises.map(merchandise => (merchandise.name))
    return (
        <div>
            {merchandisesElement}
        </div>
    );
}