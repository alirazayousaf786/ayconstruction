"use client";
import Container from "@/components/container";
import Image from "next/image";
import { useState } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Gallery() {
  const gallerys = [
    { image: "/g1.jpg", title: "Roofing", description: "The image is showing the roofing work of a building under construction." },
    { image: "/g2.jpg", title: "Building", description: "The image showcases a multi-story building under construction, with scaffolding and cranes visible." },
    { image: "/g3.jpg", title: "Bridge", description: "The image captures the construction of a large bridge spanning a body of water." },
    { image: "/g4.jpg", title: "Roofing", description: "The image is showing the roofing work of a building under construction." },
    { image: "/g5.jpg", title: "Building", description: "The image showcases a multi-story building under construction, with scaffolding and cranes visible." },
    { image: "/g6.jpg", title: "Bridge", description: "The image captures the construction of a large bridge spanning a body of water." },
    { image: "/g7.jpg", title: "Roofing", description: "The image is showing the roofing work of a building under construction." },
    { image: "/g8.jpg", title: "Building", description: "The image showcases a multi-story building under construction, with scaffolding and cranes visible." },
  ];

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(!open);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? gallerys.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === gallerys.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* top section */}
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center group">
        <div className="absolute inset-0 top-section-main"></div>
        <div className="relative text-center text-white px-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-2xl">Our Gallery</h1>
          <hr className="border-t-4 border-rose-500 w-24 mx-auto mb-5 shadow-lg" />
          <div className="flex justify-center gap-2 text-lg font-semibold">
            <span className="hover:text-rose-300 cursor-pointer transition-all">Home</span>
            <span>/</span>
            <span className="text-rose-300">Gallery</span>
          </div>
        </div>
      </section>

      {/* second section */}
      <section>
        <Container>
          <div>
            <h2 className="text-4xl font-bold text-rose-800 text-center mt-16 mb-6">Our Gallery</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Explore our collection of images showcasing our projects, craftsmanship, and dedication to excellence in construction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
            {gallerys.map((gallery, index) => (
              <div
                key={index}
                onClick={() => handleOpen(index)}
                className="bg-white rounded-lg shadow-lg overflow-hidden relative group cursor-pointer"
              >
                <div className="w-full h-48 overflow-hidden">
                  <Image
                    src={gallery.image}
                    alt={gallery.title}
                    width={400}
                    height={300}
                    className="w-full h-50 object-cover transform transition-transform duration-1000 hover:scale-125"
                  />
                  <div className="absolute bottom-0 left-0 h-[3px] bg-rose-800 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>

                <div className="absolute inset-0 bg-rose-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-center opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-xl font-bold mb-2 text-rose-800">{gallery.title}</h3>
                  <p className="text-gray-600">{gallery.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    {/* model open section image */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-20 right-4 text-white text-3xl p-2 hover:text-rose-500"
          >
            <FaTimes />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 text-white text-3xl p-2 hover:text-rose-500"
          >
            <FaChevronLeft />
          </button>

          <div className="max-w-3xl mx-auto relative">
            <Image
              src={gallerys[currentIndex].image}
              alt={gallerys[currentIndex].title}
              width={800}
              height={600}
              className="object-contain max-h-[80vh]"
            />
            <div className="text-center text-white mt-4">
              <h3 className="text-2xl font-bold">{gallerys[currentIndex].title}</h3>
              <p>{gallerys[currentIndex].description}</p>
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 text-white text-3xl p-2 hover:text-rose-500"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  );
}
