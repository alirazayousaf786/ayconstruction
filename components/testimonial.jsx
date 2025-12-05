"use client";
import { useState, useEffect } from "react";
import Container from "@/components/container";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonial() {
 const Testimonials = [
  {
    image: "/project_5.jpg",
    name: "John",
    worktitle: "Builder my house",
    description:
      "John did an amazing job building my house with precision and care. Highly recommended for anyone looking for quality construction.",
    imageCustomer: "/testimonial-1.jpg",
    nameCustomer: "Rehana",
    icon: "⭐⭐⭐⭐",
  },
  {
    image: "/project_2.jpg",
    name: "Alice",
    worktitle: "Interior Designer",
    description:
      "Alice transformed my living space into a modern and cozy environment. Her attention to detail is exceptional.",
    imageCustomer: "/testimonial-2.jpg",
    nameCustomer: "Sam",
    icon: "⭐⭐⭐⭐",
  },
  {
    image: "/project_3.jpg",
    name: "Michael",
    worktitle: "Landscape Architect",
    description:
      "Michael redesigned my garden beautifully, blending aesthetics with functionality. Everyone loves the new outdoor space.",
    imageCustomer: "/testimonial-3.jpg",
    nameCustomer: "Sam",
    icon: "⭐⭐⭐⭐",
  },
  {
    image: "/project_4.jpg",
    name: "Sophia",
    worktitle: "Renovation Expert",
    description:
      "Sophia handled our home renovation seamlessly. From planning to execution, everything went smoothly and on time.",
    imageCustomer: "/testimonial-4.jpg",
    nameCustomer: "Sam",
    icon: "⭐⭐⭐⭐",
  },
];

  const [count, setCount] = useState(0);
  const totalCount = Testimonials.length;

  const next = () => setCount((prev) => (prev + 1) % totalCount);
  const prev = () => setCount((prev) => (prev - 1 + totalCount) % totalCount);

  useEffect(() => {
    const interval = setInterval(next, 4000); 
    return () => clearInterval(interval);
  }, []);

  const testimonial = Testimonials[count];

  return (
    <section className="relative py-16  overflow-hidden">
      <Container>
        <div className="text-center mb-10 relative z-10">
          <h1 className="text-4xl font-bold text-rose-800 mb-2">Testimonials</h1>
         <p className="text-gray-600 max-w-2xl mx-auto">
  We take pride in building homes and spaces that last a lifetime. From careful planning to precise execution, our team ensures every detail is perfect, delivering high-quality construction that meets your vision and exceeds expectations.
</p>
        </div>

        <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-xl overflow-hidden max-w-4xl mx-auto relative z-10">
          <div className="md:w-1/2 h-64 md:h-auto relative transition-all duration-700 ease-in-out">
            <Image
              key={testimonial.image}
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover transition-opacity duration-700 ease-in-out"
            />
          </div>

          <div className="md:w-1/2 p-6 flex flex-col justify-between relative transition-all duration-700 ease-in-out">
            <div>
              <h2 className="text-2xl font-semibold text-rose-800">{testimonial.name}</h2>
              <h3 className="text-gray-500 mb-4">{testimonial.worktitle}</h3>
              <p className="text-gray-600 italic relative">
                <span className="absolute -left-4 -top-2 text-3xl text-rose-800">&#10077;</span>
                {testimonial.description}
                <span className="absolute -right-4 -bottom-2 text-3xl text-rose-800">&#10078;</span>
              </p>
            </div>

            <div className="flex items-center mt-6 gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rose-200">
                <Image
                  key={testimonial.imageCustomer}
                  src={testimonial.imageCustomer}
                  alt={testimonial.nameCustomer}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full transition-opacity duration-700 ease-in-out"
                />
              </div>
              <div>
                <p className="text-gray-800 font-medium">{testimonial.nameCustomer}</p>
                <div className="text-rose-600">{testimonial.icon}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6 z-10 relative">
          <button
            onClick={prev}
            className="p-4 bg-white rounded-full shadow-lg hover:shadow-2xl hover:bg-rose-100 transition-all duration-300"
          >
            <FaChevronLeft className="w-6 h-6 text-rose-800 hover:text-rose-600 transition-colors duration-300" />
          </button>
          <button
            onClick={next}
            className="p-4 bg-white rounded-full shadow-lg hover:shadow-2xl hover:bg-rose-100 transition-all duration-300"
          >
            <FaChevronRight className="w-6 h-6 text-rose-800 hover:text-rose-600 transition-colors duration-300" />
          </button>
        </div>
      </Container>
    </section>
  );
}
