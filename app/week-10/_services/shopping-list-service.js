import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];
    const itemsRef = collection(db, "users", userId, "items");
    const q = query(itemsRef);

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        items.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return items;
}

export async function addItem(userId, item) {
    const docRef = await addDoc(collection(db, "users", userId, "items"), item);
    return docRef.id;
}