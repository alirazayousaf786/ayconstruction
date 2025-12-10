"use client";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Container from "@/components/container";
import { FcOk } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdAccessTime } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { IoAlertOutline } from "react-icons/io5";
import Image from "next/image";
import "../globals.css";

export default function EmergencyServices() {
  const services = [
    {
      icon: <MdAccessTime />,
      title: "Rapid Response",
      description: "Our teams reach you within 1–2 hours of your emergency call.",
      Respons: "Avg Response",
      worktime: "1–2hrs",
    },
    {
      icon: <GrCertificate />,
      title: "Certified Professionals",
      description:
        "Fully licensed, insured, and trained in emergency response protocols.",
      Respons: "Certified Team",
      worktime: "100%",
    },
    {
      icon: <SlEnergy />,
      title: "Always Available",
      description: "24/7 emergency support with no holidays or off-hours.",
      Respons: "Availability",
      worktime: "24/7",
    },
  ];

  const cards = [
    {
      image: "/c1.jpg",
      imgtext: "100",
      title: "Structural Damage Repair",
      time: "20 minutes",
      text1: "When cracks appear suddenly in walls or foundations.",
      text2: "If a building or structure shows signs of tilting or sinking.",
      text3: "After heavy rain, flooding, or an earthquake causes visible damage.",
      iconok: <FcOk />,
      timeicon: <MdAccessTime />,
      payment: "Callout: $50",
    },
    {
      image: "/c4.jpg",
      imgtext: "1500",
      title: "Water Leakage Emergency Repair",
      time: "50 minutes",
      text1: "When water starts leaking from ceilings or underground pipes.",
      text2: "If flooding occurs in basements or washrooms.",
      text3: "When damp patches or mold appear suddenly.",
      iconok: <FcOk />,
      timeicon: <MdAccessTime />,
      payment: "Callout: $4000",
    },
    {
      image: "/blog_1.jpg",
      imgtext: "300",
      title: "Electrical Fault Emergency Service",
      time: "30 minutes",
      text1: "When sparks, burning smells, or sudden power outages occur.",
      text2: "If circuit breakers trip repeatedly.",
      text3: "When outlets or switches feel hot or produce noise.",
      iconok: <FcOk />,
      timeicon: <MdAccessTime />,
      payment: "Callout: $60",
    },
  ];

  return (
    <>
      {/* top section */}
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-800/60"></div>
        <div className="relative text-center text-white px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 tracking-wide">
            Our Emergency Services
          </h1>
          <hr className="border-t-4 border-rose-800 w-20 md:w-24 mx-auto mb-4" />
          <div className="flex justify-center gap-2 text-sm md:text-lg">
            <span className="hover:text-rose-300 cursor-pointer">Home</span>
            <span>/</span>
            <span className="text-rose-800">Emergency Services</span>
          </div>
        </div>
      </section>

      {/* emergency hero section */}
      <section className="relative bg-[url('/c3.jpg')] bg-cover bg-center h-[55vh] md:h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-slate-800/70"></div>
        <Container>
          <div className="relative z-10 text-center text-white px-4 md:px-6">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
              Emergency Services
            </h1>
            <p className="text-sm md:text-lg max-w-xl mx-auto text-slate-200 mb-6">
              Quick access to our professional construction services and urgent
              support.
            </p>

            {/* social media button addd here*/}
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="flex items-center gap-2 bg-green-600 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition"
              >
                <FaWhatsapp className="text-2xl" /> WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white text-rose-800 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition"
              >
                <FaEnvelope className="text-2xl" /> Email
              </a>
            </div>

            {/* key points add */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4">
              {[
                "Fast 24/7 emergency response",
                "Certified construction professionals",
                "Reliable high-quality project solutions",
              ].map((point, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-20 text-rose-800 backdrop-blur-md p-4 rounded-xl shadow-lg hover:scale-105 transition"
                >
                  <div className="flex justify-center gap-3">
                    <FcOk className="text-2xl" />
                    <h3 className="text-sm md:text-md font-semibold">{point}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* second card section  */}
      <section>
        <Container>
          <div className="flex justify-center items-center gap-2 bg-slate-100 p-2 rounded-lg shadow-lg mt-10 mx-auto w-fit">
            <VscWorkspaceTrusted className="text-rose-800" />
            <h4 className="text-sm text-rose-800">Trusted Emergency Response</h4>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-2">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl hover:border-b-4 hover:border-rose-800 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="bg-slate-100 p-2 rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                <hr className="my-3" />
                <div className="flex justify-between">
                  <p>{service.Respons}</p>
                  <span className="text-xl font-bold text-rose-800">
                    {service.worktime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* last card section */}
      <section>
        <Container>
          <div className="flex justify-center items-center gap-2 bg-slate-100 p-2 rounded-lg shadow-lg mt-10 mx-auto w-fit">
            <IoAlertOutline className="text-rose-800" />
            <h4 className="text-sm text-rose-800">Emergency Solutions</h4>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 px-2">
            {cards.map((card, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl hover:border-b-4 hover:border-rose-800 transition p-4"
              >
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={400}
                    height={250}
                    className="w-full h-[180px] md:h-[200px] object-cover transition group-hover:scale-110"
                  />
                  <span className="absolute top-2 left-2 bg-rose-800 text-white px-2 py-1 text-xs rounded-md">
                    {card.imgtext}
                  </span>
                  <span className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 flex items-center gap-1 text-xs rounded-md">
                    <MdAccessTime /> {card.time}
                  </span>
                </div>

                <h2 className="text-lg font-semibold mt-3">{card.title}</h2>

                <div className="mt-3 space-y-2">
                  {[card.text1, card.text2, card.text3].map((item, index) => (
                    <p key={index} className="flex gap-2 text-sm text-gray-700">
                      <FcOk className="mt-1" /> {item}
                    </p>
                  ))}
                </div>

                <hr className="my-4" />

                <div className="flex justify-between items-center text-sm">
                  <p className="flex items-center gap-1 text-rose-800 font-medium">
                    {card.timeicon} {card.payment}
                  </p>
                  <button className="bg-rose-800 text-white px-3 py-1.5 rounded-md hover:bg-rose-900 transition">
                    More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
