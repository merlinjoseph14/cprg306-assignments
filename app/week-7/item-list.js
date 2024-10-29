"use client";
import React, { useState} from "react";

function ItemList({items}) 
{
    const[sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => 
    {
        if(sortBy === 'name')
        {
            return a.name.localeCompare(b.name);
        } 
        else if (sortBy === 'category')
        {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div>
            <div className="flex items-center mb-3">
                <label className="center">Sort by:</label>
                <div>
                    <button 
                        onClick={() => setSortBy('name')}
                        className={`p-1 m-2 w-28 ${sortBy === 'name' ? 'bg-pink-400' : 'bg-purple-500'}`}
                    >
                        Name
                    </button>
                    <button 
                        onClick={() => setSortBy('category')}
                        className={`p-1 m-2 w-28 ${sortBy === 'category' ? 'bg-pink-400' : 'bg-purple-500'}`}
                    >
                        Category
                    </button>
                </div>
            </div>
    
            <ul>
                {sortedItems.map((item) => 
                (
                    <li key={item.id} className="bg-gray-900 p-2 shadow-md mb-4 max-w-md ">
                        <span className="text-white text-lg font-bold">
                            {item.name} - {item.category}
                        </span>
                        <p className="text-white">Buy {item.quantity} in {item.category}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;