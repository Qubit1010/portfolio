import Header from "@/components/Header";

export const metadata = {
  title: "About",
  description: "About Page of my portfolio",
};

export default function About() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-start p-24">
        <h1 className="text-sky-500">About</h1>
        <p>lorem ipsem</p>
      </main>
    </>
  );
}
