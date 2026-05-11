import Navbar from "./Navbar";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#070B1A] text-white px-6 py-16">

        <div className="max-w-5xl mx-auto bg-white/10 border border-white/10 rounded-3xl p-8">

          <h1 className="text-4xl font-bold text-purple-400 mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-300 leading-8">
            Neurovixa respects your privacy and does not collect personal
            information without your permission.
          </p>

          <p className="text-gray-300 leading-8 mt-6">
            We may use cookies, analytics and third-party services
            to improve user experience and website performance.
          </p>

          <p className="text-gray-300 leading-8 mt-6">
            By using Neurovixa, you agree to our privacy policy
            and website terms.
          </p>

        </div>

      </div>
    </>
  );
}