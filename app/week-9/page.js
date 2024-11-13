"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from 'next/link';

export default function Page() {
    
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    return (
        <main>
            <h1 className="text-4xl font-bold mb-5">Shopping List App</h1>
            <p>{user ? `Hi there, ${user.email}` : 'Welcome, Guest'}</p>

            <p>
            {user ? (
                    <>
                        <button onClick={firebaseSignOut}>Sign Out</button>
                        <br />
                        <Link href="/week-9/shopping-list">
                            Continue to your Shopping List
                        </Link>
                    </>
                ) : (
                    <button onClick={gitHubSignIn}>Sign In with GitHub</button>
                )}
            </p>
        </main>
    );
}
