import { useState } from "react";
import jsPDF from "jspdf";

export default function ImageToPDF() {
  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
    }));

    setImages(previews);
  };

  const convertToPDF = () => {
    if (images.length === 0) {
      alert("Please upload images first");
      return;
    }

    const pdf = new jsPDF("p", "mm", "a4");

    images.forEach((img, index) => {
      if (index > 0) pdf.addPage();

      pdf.addImage(img.url, "JPEG", 10, 15, 190, 250);
    });

    pdf.save("neurovixa-images.pdf");
  };

  return (
    <div className="min-h-screen bg-[#070B1A] text-white px-6 py-10">
      <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-10">
        Image To PDF Converter
      </h1>

      <div className="max-w-5xl mx-auto bg-white/10 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl shadow-2xl">
        <label className="block border-2 border-dashed border-purple-500 rounded-3xl p-10 text-center cursor-pointer hover:bg-white/10 transition">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImages}
            className="hidden"
          />

          <div className="text-6xl mb-4">🖼️</div>
          <h2 className="text-2xl font-bold">Upload Images</h2>
          <p className="text-gray-400 mt-2">
            Select JPG, PNG, or multiple images to convert into PDF
          </p>
        </label>

        {images.length > 0 && (
          <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-8">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="bg-[#111827] rounded-2xl p-3 border border-white/10"
                >
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                  <p className="text-sm text-gray-400 mt-3 truncate">
                    {img.name}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={convertToPDF}
              className="mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 py-4 rounded-2xl font-bold text-lg"
            >
              Download PDF
            </button>
          </>
        )}

        <div className="mt-10 text-gray-300 bg-[#111827] p-6 rounded-2xl">
          <h2 className="text-2xl font-bold text-purple-400 mb-3">
            Free Image to PDF Tool
          </h2>
          <p>
            Convert multiple images into a clean PDF file instantly. This tool is
            useful for assignments, documents, notes, screenshots, ID cards, and
            printable files.
          </p>
        </div>
      </div>
    </div>
  );
}