import React from "react";

const Item = ({ name, quantity, category }) => {
    return (
        <li className="bg-gray-900 p-2 mb-4 shadow-md max-w-md">
            <p className="text-lg font-bold text-white">{name}</p>
            <p className="text-white">Buy {quantity} in {category}</p>
        </li>
    );
};

export default Item;