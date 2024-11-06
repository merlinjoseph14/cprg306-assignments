"use client";
import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function getMeals() {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        }
        getMeals();
    }, [ingredient]);

    async function loadMealIdeas() {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    return (
        <div>
            <h1>Meal Ideas for {ingredient}</h1>
            <ul>
                {meals && meals.length > 0 ? (
                    meals.map(meal => (
                        <li key={meal.idMeal}>{meal.strMeal}</li>
                    ))
                ) : (
                    <p>No meal ideas found for the ingredient: {ingredient}</p>
                )}
            </ul>
        </div>
    );
};

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
}