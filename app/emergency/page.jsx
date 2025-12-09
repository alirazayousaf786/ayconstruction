"use client";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Container from "@/components/container";
import { FcOk } from "react-icons/fc";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdAccessTime } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { SlEnergy } from "react-icons/sl";
import { IoAlertOutline } from "react-icons/io5";
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
      title: <SlEnergy />,
      title: "Always Available",
      description: "24/7 emergency support with no holidays or off-hours.",
      Respons: "Availability",
      worktime: "24/7",
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
      {/* Last section card design */}
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
                     <div className="bg-slate-100 p-2 rounded-lg group transform hover:scale-105 translate-all"> <i className="text-2xl text-rose-800">{service.icon}</i></div>
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
                <IoAlertOutline  size={20} />
              </i>
              <h4 className="text-sm font-normal text-rose-800">
                Trusted Emergency Response
              </h4>
            </div>
        </Container>
      </section>
    </>
  );
}
