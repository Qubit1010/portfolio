"use client";

import { useRouter } from "next/navigation";

export default function ProfileDetails({ params }) {
  const router = useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>My Profile: {params.Id}</h1> 
      <a className="text-gray-500" onClick={() => router.push('/profile')} >Back</a>
    </main>
  );
}
