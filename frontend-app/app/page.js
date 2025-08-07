import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg mb-8">This is a simple Next.js application.</p>
      </div>
    </div>
  );
}
