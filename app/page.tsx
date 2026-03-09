import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold mb-4">
        Sai Krishna Veerabathini
      </h1>

      <p className="text-xl text-gray-600 mb-6">
        AI Infrastructure Engineer • DevOps • Cloud Platforms
      </p>

      <p className="max-w-2xl text-gray-500">
        I design scalable cloud platforms, Kubernetes infrastructure,
        and AI-driven operational automation across AWS, Azure, and GCP.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="https://github.com/sveerabathini"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/sai-krishna-veerabathini-b0393340"
          className="px-6 py-3 border rounded-lg"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}
