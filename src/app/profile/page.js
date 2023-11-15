"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Profile List</h1>
      <Link href="../about" className="text-sky-500 text-xl" >
        About
      </Link>
      <a onClick={() => router.push("/profile/1")} className="text-sky-600">
        Profile 1
      </a>
      <a onClick={() => router.push("/profile/2")} className="text-sky-600">
        Profile 2
      </a>
      <a onClick={() => router.push("/profile/3")} className="text-sky-600" s>
        Profile 3
      </a>
    </main>
  );
}
