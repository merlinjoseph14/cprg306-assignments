"use client";
import React from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

function Page() {
    //initializing state variable for data from items.json
    const [ items, setItems ] = useState(itemsData);

    const handleAddItem = (item) => 
    {
        setItems(originalItems => [...originalItems, item]);
    };
    
    return (
        <main className="p-5">
            <h1 className="text-4xl font-bold mb-5">Shopping List</h1>
            <NewItem onAddItem = {handleAddItem}/>
            <ItemList items = {items}/>
        </main>
    );
}
export default Page;