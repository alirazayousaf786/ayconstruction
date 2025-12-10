"use client";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Container from "@/components/container";
import { FcOk } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdAccessTime } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { IoAlertOutline } from "react-icons/io5";
import Image from "next/image"
export default function EmergencyServices() {
  const services = [
    {
      icon: <MdAccessTime />,
      title: "Rapid Response",
      description:
        "Our teams reach you within 1-2 hours of your emergency call.",
      Respons: "Avg Response",
      worktime: "1-2hrs",
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
    text1:"When cracks appear suddenly in walls or foundations.",
    text2:"If a building or structure shows signs of tilting or sinking.",
    text3:"After heavy rain, flooding, or an earthquake causes visible damage.",
    iconok: <FcOk />,
    timeicon: <MdAccessTime  />,
    payment: "Callout: $50",
  },
    {
    image: "/c4.jpg",
    imgtext: "1500",
    title: "Water Leakage Emergency Repair",
    time: "50 minutes",
    text1:"When water starts leaking from ceilings, walls, or underground pipes..",
    text2:"If flooding occurs in basements or washrooms.",
    text3:"When damp patches or mold appear suddenly.",
    iconok: <FcOk />,
    timeicon: <MdAccessTime  />,
    payment: "Callout: $4000",
  },
    {
    image: "/blog_1.jpg",
    imgtext: "300",
    title: "Electrical Fault Emergency Service",
    time: "30 minutes",
    text1:"When sparks, burning smells, or sudden power outages occur.",
    text2:"If circuit breakers trip repeatedly.",
    text3:"When outlets or switches feel hot or produce noise.",
    iconok: <FcOk />,
    timeicon: <MdAccessTime  />,
    payment: "Callout: $60",
  },
 
];

  return (
    <>
      {/* Top Gallery Section */}
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center group">
        <div className="absolute inset-0 bg-slate-800/60"></div>
        <div className="relative text-center text-white px-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-2xl">
            Our Emergency Services
          </h1>
          <hr className="border-t-4 border-rose-800 w-24 mx-auto mb-5 shadow-lg" />
          <div className="flex justify-center gap-2 text-lg font-semibold">
            <span className="hover:text-rose-300 cursor-pointer transition-all">
              Home
            </span>
            <span>/</span>
            <span className="text-rose-800"> Emergency Services</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-[url('/c3.jpg')] bg-cover bg-center h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-slate-800/70"></div>
        <Container>
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Emergency Services
            </h1>
            <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-slate-200">
              Quick access to our professional construction services and urgent
              support.
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600 px-8 py-4 rounded-full font-bold text-xl shadow-2xl transform hover:scale-105 transition-all"
              >
                <FaWhatsapp className="text-3xl" /> WhatsApp
              </a>
              <a
                href="mailto:info@construction.com"
                className="flex items-center gap-3 bg-white text-rose-800 px-8 py-4 rounded-full font-bold text-xl shadow-2xl transform hover:scale-105 transition-all"
              >
                <FaEnvelope className="text-3xl" /> Email
              </a>
            </div>
            {/* add key point */}
            <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Fast 24/7 emergency response",
                "Certified construction professionals",
                "Reliable high-quality project solutions",
              ].map((point, index) => (
                <div
                  key={index}
                  className="bg-white text-rose-800 bg-opacity-20 backdrop-blur-md p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all cursor-pointer"
                >
                  <div className="flex items-start justify-center gap-3">
                    <i className="text-2xl">
                      <FcOk />
                    </i>
                    <h3 className="text-md font-bold">{point}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      {/* thrid section card design */}
      <section>
        <Container>
          <div>
            <div className="flex flex-row gap-1 w-75 mx-auto bg-slate-100 p-2 rounded-lg shadow-lg items-center justify-center ">
              <i className="mt-1 font-bold text-rose-800">
                <VscWorkspaceTrusted size={20} />
              </i>
              <h4 className="text-sm font-normal text-rose-800">
                Trusted Emergency Response
              </h4>
            </div>

            {/* add a card */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white shadow-md rounded-lg p-6 hover:shadow-xl hover:border-b-rose-800 hover:border-b-4 transition-shadow duration-300 hover:shadow-rose-100"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-slate-100 p-2 rounded-lg group transform hover:scale-105 translate-all">
                        {" "}
                        <i className="text-2xl text-rose-800">{service.icon}</i>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-lg font-semibold">
                          {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex flex-row items-center justify-between gap-2 mt-2">
                      <h3 className="text-md font-medium">{service.Respons}</h3>
                      <span className="text-3xl font-bold text-rose-800 ">
                        {service.worktime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      {/* Last image section */}
      <section>
        <Container>
          <div className="flex flex-row gap-1 w-75 mx-auto bg-slate-100 p-2 rounded-lg shadow-lg items-center justify-center ">
            <i className="mt-1 font-bold text-rose-800">
              <IoAlertOutline size={20} />
            </i>
            <h4 className="text-sm font-normal text-rose-800">
              Emergency Solutions
            </h4>
          </div>
 <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 my-10">
  {cards.map((card, index) => (
    <div
      key={index}
      className="group bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-rose-200 transition-all duration-300 border border-gray-200 p-4 w-full max-w-sm mx-auto hover:-translate-y-1
      hover:border-b-4 hover:border-b-rose-800 cursor-pointer
      "
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={card.image}
          alt={card.title}
          width={350}
          height={250}
          className="w-full h-[180px] object-cover transform group-hover:scale-110 transition-all duration-500"
        />
        <div className="absolute top-2 left-2 bg-rose-800 text-white text-xs px-2 py-1 rounded-md shadow-md">
          {card.imgtext}
        </div>

        <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
          <MdAccessTime className="text-white text-sm" />
          {card.time}
        </div>
      </div>

      <h2 className="text-lg font-semibold mt-4">{card.title}</h2>

      <div className="mt-3 space-y-2">
        {[card.text1, card.text2, card.text3].map((text, i) => (
          <div key={i} className="flex items-start gap-2">
            <FcOk className="mt-1" />
            <span className="text-gray-700 text-sm">{text}</span>
          </div>
        ))}
      </div>

      <hr className="my-4" />


      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-rose-800 font-medium">
          <i>{card.timeicon}</i>
          <span>{card.payment}</span>
        </div>

        <button className="bg-rose-800 text-white px-3 py-1.5 rounded-lg hover:bg-rose-900 transition text-sm">
          More Details <span className="text-xl font-bold mt-1">→</span>
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
