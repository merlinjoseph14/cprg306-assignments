import Link from "next/link";

export default function Page() {

  return (
    <main className="flex flex-col justify-center items-center p-5">
      <h1 className="text-2xl font-bold mb-4">CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2/" className="hover:text-green-500 text-xl">Week 2</Link>
      </p>
      <p>
        <Link href="/week-33/" className="hover:text-green-500 text-xl">Week 3</Link>
      </p>
      <p>
        <Link href="/week-4/" className="hover:text-green-500 text-xl">Week 4</Link>
      </p>
      <p>
        <Link href="/week-5/" className="hover:text-green-500 text-xl">Week 5</Link>
      </p>
      <p>
        <Link href="/week-6/" className="hover:text-green-500 text-xl">Week 6</Link>
      </p>
      <p>
        <Link href="/week-7/" className="hover:text-green-500 text-xl">Week 7</Link>
      </p>
      <p>
        <Link href="/week-8/" className="hover:text-green-500 text-xl">Week 8</Link>
      </p>
      <p>
        <Link href="/week-9/" className="hover:text-green-500 text-xl">Week 9</Link>
      </p>
      <p>
        <Link href="/week-10/" className="hover:text-green-500 text-xl">Week 10</Link>
      </p>
    </main>
  );
};