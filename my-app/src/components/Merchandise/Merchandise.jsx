import React from "react";

//function Merchandise(props) {
//    return (
//        <div>
//            {props.name}
//        </div>
//    );
//}

let merchandises = [
    {name: 'boo'},
    {name: 'dress'}
]

let merchandisesElement = merchandises.map( merchandise => (merchandise.name))

export default function Merchandises(props) {
    return (
        <div>
            {merchandisesElement}
        </div>
    );
}