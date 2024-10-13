"use client";

import { useState } from 'react';
import NewItem from './new-item';

const NewItemPage =  () => {
    return (
        <main className="p-5">
            <h1 className="text-4xl font-bold mb-5">Week 5</h1>
            <NewItem/>
        </main>
    );
};

export default NewItemPage;