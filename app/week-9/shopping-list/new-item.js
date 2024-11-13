"use client";
import {useState} from 'react';

export default function NewItem({onAddItem}) 
{
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const newId = () => Math.random().toString(36).substr(2, 11);

    const decrement = (e) => 
    {
        e.preventDefault();
        if (quantity > 1)
        {
            setQuantity(quantity - 1);
        }
    };

    const increment = (e) => 
    {
        e.preventDefault();
        if (quantity < 20)
        {
            setQuantity(quantity + 1);
        }
    };


    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const item = 
        {
            name, 
            quantity, 
            category, 
            id: newId()
        };

        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
    };
    
    return (
        <form onSubmit={handleSubmit} className="p-4 m-4 bg-gray-100 w-80 rounded-md">
            {/* Name Field */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-black font-bold"></label>
                <input
                    type ="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required className="w-full p-2 mt-1 border rounded text-black" 
                    placeholder="Enter item name"
                />
            </div>

            <div class="flex justify-between" className="mb-4">
                {/*Quantity  Field */}
                <label className="block text-black font-bold"></label>
                <div className="flex items-center mb-2 space-x-2 w-36">
                    <button
                        type="button"
                        className="w-8 bg-green-500 text-white text-semibold rounded-lg shadow-md disabled:bg-gray-300"
                        onClick={decrement}
                        disabled={quantity === 1}
                    >
                        -
                    </button>
                    <h1 className="text-black text-2xl">{quantity}</h1>
                    <button
                        type="button"
                        className="w-8 bg-green-500 text-white text-semibold rounded-lg shadow-md disabled:bg-gray-300"
                        onClick={increment}
                        disabled={quantity === 20}
                    >
                        +
                    </button>
                </div>

                {/* Category Field */}
                <div className='mb-2 w-36'>
                    <label htmlFor="category" className="block text-black font-bold"></label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-2 mt-1 border rounded text-black"
                    >
                        <option value="produce" className="text-black">Produce</option>
                        <option value="dairy" className="text-black">Dairy</option>
                        <option value="bakery" className="text-black">Bakery</option>
                        <option value="meat" className="text-black">Meat</option>
                        <option value="frozen foods" className="text-black">Frozen Foods</option>
                        <option value="canned goods" className="text-black">Canned Goods</option>
                        <option value="dry goods" className="text-black">Dry Goods</option>
                        <option value="beverages" className="text-black">Beverages</option>
                        <option value="snacks" className="text-black">Snacks</option>
                        <option value="household" className="text-black">Household</option>
                        <option value="other" className="text-black">Other</option>
                    </select>
                </div>    
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded-lg"
            >
                +
            </button>
        </form> 
    );
};