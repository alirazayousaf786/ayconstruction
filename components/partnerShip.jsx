"use client";
import Image from "next/image";
import Counter from "../components/counter";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import Fourth from "../components/fourhero";
import Container from "@/components/container";
import Link from "next/link";
import "./component.css";

export default function PartNerShip() {
  const gallery = ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg"];

  return (
    <>
      <Container>
        <section className="py-10">

          <Counter />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full mt-10">

            <ImageBox src="/safety.webp" />

            <CenterCard />

            <ImageBox src="/safety-briefing.webp" />
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-10">

            <SimpleCard1 />

            <SimpleCard2 />

            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3 rounded-2xl">
              {gallery.map((img, i) => (
                <div key={i} className="relative rounded-xl overflow-hidden group h-40 sm:h-48">
                  <Image
                    src={img}
                    alt={img}
                    fill
                    className="object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              ))}
            </div>

          </div>
        </section>
      </Container>

      <Fourth />
    </>
  );
}

function ImageBox({ src }) {
  return (
    <div className="flex items-center justify-center p-3">
      <Image
        src={src}
        alt="image"
        width={300}
        height={300}
        className="rounded-2xl shadow-xl hover:scale-105 transition-all duration-500"
      />
    </div>
  );
}
function CenterCard() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 text-center">
      <div className="flex items-center justify-center mb-4">
        <Image
          src="/partnership-1.png"
          alt="image"
          width={110}
          height={110}
          className="opacity-90 move-up-down"
        />
      </div>

      <h2 className="text-xl font-bold">Building Partnerships for Success</h2>

      <p className="text-[15px] text-zinc-300 mt-2">
        We work together with trust and commitment to complete all construction
        projects, handling challenges and requirements with full responsibility.
      </p>
    </div>
  );
}

function SimpleCard1() {
  return (
    <div className="bg-slate-900 p-5 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-500 space-y-4">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/constructionImage_04.png" width={50} height={50} alt="img" className="rounded-lg" />

          <div>
            <p className="text-lg font-semibold text-white">Certified & Awards</p>
            <span className="text-sm text-zinc-400">Winner*</span>
          </div>
        </div>

        <Image src="/shape3.png" width={30} height={30} alt="shape" className="opacity-70" />
      </div>

      <p className="text-zinc-300 text-sm">
        Recognized for excellence in construction and quality standards, our team is committed to delivering durable and reliable structures.
We focus on precision, safety, and modern techniques to ensure long-lasting results.
Our services are known for professionalism, timely execution, and customer satisfaction.
Every project is built with care, high-grade materials, and expert craftsmanship.
We believe in creating spaces that are truly worth building and stand the test of time.
      </p>

      <Link href="/construction">
        <button className="w-full group">
          <div className="flex justify-between items-center bg-rose-800 p-3 rounded-xl 
          border border-rose-900 shadow-lg group-hover:bg-rose-900 transition-all">

            <span className="text-white font-bold">Construction</span>

            <div className="bg-slate-900 p-2 rounded-lg text-white group-hover:bg-rose-700 group-hover:translate-x-2 transition-all">
              <FaArrowRightFromBracket size={18} />
            </div>

          </div>
        </button>
      </Link>
    </div>
  );
}

function SimpleCard2() {
  return (
    <div className="bg-slate-900 p-5 rounded-2xl shadow-xl hover:-translate-y-2 transition-all duration-500 space-y-4">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/constructionImage_05.png" width={50} height={50} alt="img" className="rounded-lg" />

          <div>
            <p className="text-lg font-semibold text-white">Best Quality</p>
            <span className="text-sm text-zinc-400">Services*</span>
          </div>
        </div>

        <Image src="/shape3.png" width={30} height={30} alt="shape" className="opacity-70" />
      </div>

      <p className="text-zinc-300 text-sm">
       Known for our superior construction work and strong quality standards, we take pride in every project we complete.
Our team uses advanced methods and skilled workmanship to ensure reliable and lasting structures.
We deliver services that are efficient, trustworthy, and focused on client needs.
From planning to finishing, every step is handled with attention to detail and safety.
We aim to build spaces that add value, look outstanding, and remain durable for years.
      </p>

      <Link href="/project">
        <button className="w-full group">
          <div className="flex justify-between items-center bg-rose-800 p-3 rounded-xl 
          border border-rose-900 shadow-lg group-hover:bg-rose-900 transition-all">

            <span className="text-white font-bold">Project</span>

            <div className="bg-slate-900 p-2 rounded-lg text-white group-hover:bg-rose-700 group-hover:translate-x-2 transition-all">
              <FaArrowRightFromBracket size={18} />
            </div>

          </div>
        </button>
      </Link>
    </div>
  );
}
