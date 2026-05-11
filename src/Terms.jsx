import Navbar from "./Navbar";

export default function Terms() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#070B1A] text-white px-6 py-16">

        <div className="max-w-5xl mx-auto bg-white/10 border border-white/10 rounded-3xl p-8">

          <h1 className="text-4xl font-bold text-purple-400 mb-8">
            Terms & Conditions
          </h1>

          <p className="text-gray-300 leading-8">
            By using Neurovixa tools and services, you agree
            to follow our website terms and conditions.
          </p>

          <p className="text-gray-300 leading-8 mt-6">
            Users are responsible for how they use the tools
            available on this platform.
          </p>

          <p className="text-gray-300 leading-8 mt-6">
            Neurovixa may update tools, content or policies
            anytime without prior notice.
          </p>

        </div>

      </div>
    </>
  );
}