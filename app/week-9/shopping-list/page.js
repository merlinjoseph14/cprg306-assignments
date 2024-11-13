"use client";
import React from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";

function Page() {
    // Initializing state variable for data from items.json
    const [items, setItems] = useState(itemsData);
    // State variable to hold the name of the selected item
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useUserAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/week-9"); 
        }
    }, [user, router]);

    if (!user) {
        return null; 
    }

    const handleAddItem = (item) => {
        setItems(originalItems => [...originalItems, item]);
    };

    const handleItemSelect = (item) => {        
        const cleanUpName = item.name
            .split(",")[0]            
            .trim()            
            .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2011-\u26FF])/g, '');
            setSelectedItemName(cleanUpName);    
        };
    

    return (
        <main className="p-5">
            <h1 className="text-4xl font-bold mb-5">Shopping List</h1>
            <div className="flex">
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2">
                    {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
                </div>
            </div>
        </main>
    );
}

export default Page;