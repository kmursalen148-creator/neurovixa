import Navbar from "./Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#070B1A] text-white px-6 py-16">

        <div className="max-w-4xl mx-auto bg-white/10 border border-white/10 rounded-3xl p-8">

          <h1 className="text-4xl font-bold text-purple-400 mb-6">
            Contact Us
          </h1>

          <p className="text-gray-300 leading-8">
            If you have any questions, suggestions or business inquiries,
            feel free to contact Neurovixa anytime.
          </p>

          <div className="mt-8">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl bg-[#111827] mb-4"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl bg-[#111827] mb-4"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-2xl bg-[#111827]"
            />

            <button className="mt-5 bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-2xl font-bold">
              Send Message
            </button>

          </div>

        </div>

      </div>
    </>
  );
}