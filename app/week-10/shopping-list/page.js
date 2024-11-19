"use client";
import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingList() {
    const { user } = useUserAuth();
    const router = useRouter();

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    useEffect(() => {
        if (!user) {
            router.push("/week-9");
        } else {
            loadItems();
        }
    }, [user, router]);

    const loadItems = async () => {
        if (user) {
            const items = await getItems(user.uid);
            setItems(items);
        }
    };

    if (!user) {
        return null;
    }

    const handleAddItem = async (item) => {
        if (user) {
            const itemId = await addItem(user.uid, item);
            const newItem = { ...item, id: itemId };
            setItems(originalItems => [...originalItems, newItem]);
        }
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