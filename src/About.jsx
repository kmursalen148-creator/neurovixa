import Navbar from "./Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#070B1A] text-white px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white/10 border border-white/10 rounded-3xl p-8">
          <h1 className="text-4xl font-bold text-purple-400 mb-6">About Neurovixa</h1>
          <p className="text-gray-300 leading-8">
            Neurovixa is a free online tools website that provides useful tools like CV Maker,
            Image to PDF, Calculator, BMI Calculator, Age Calculator, Word Counter, Password
            Generator and more. Our goal is to make simple digital tools easy, fast and free
            for everyone.
          </p>
        </div>
      </div>
    </>
  );
}