import Image from "next/image";

//this will be the home page

export default function Home() {
  return (
    <main className="flex h-screen w-screen justify-center items-center flex-wrap flex-col">
      <h1 className="flex order-1">Dashboard</h1>
      <div className="flex order-2">
       Display all recent events from my family here
      </div>
    </main>
  );
}
