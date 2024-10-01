import Link from "next/link";

export default function Page() {

  return (
    <main className="flex flex-col justify-center items-center p-5">
      <h1 className="text-2xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2/" className="hover:text-green-500 text-xl">Week 2</Link>
      </p>
      <p>
        <Link href="/week-3/" className="hover:text-green-500 text-xl">Week 3</Link>
      </p>
    </main>
  );
};