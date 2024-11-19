"use client";
import React, { useState } from "react";
import Item from "./item"; // Make sure to import the Item component

function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
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
                {sortedItems.map(item => (
                    <Item 
                        key={item.name} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} 
                        onSelect={() => onItemSelect(item)} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default ItemList;