import Container from "@/components/container";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { GiModernCity } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import "../globals.css";

const data = [
  {
    icon: <GiModernCity size={20} className="text-rose-800" />,
    title: "Modern Technology",
    desc: "We integrate the latest construction technologies to ensure faster timelines",
  },
  {
    icon: <RiTeamFill size={20} className="text-rose-800" />,
    title: "Experience Engineers",
    desc: "Our team of seasoned engineers brings decades of hands-on experience",
  },
  {
    icon: <IoCheckmarkDoneSharp size={20} className="text-rose-800" />,
    title: "98%",
    desc: "Project Success rate",
  },
  {
    icon: <FaStar size={20} className="text-rose-800" />,
    title: "25 Million",
    desc: "Client Satisfaction",
  },
];

export default function About() {
  return (
    <>
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 top-section-main"></div>
        <div className="relative text-center text-white px-4 animate-fade-up">
          <h1 className="text-4xl md:text-7xl font-extrabold mb-4 tracking-wide drop-shadow-2xl">
            Abouts Us
          </h1>
          <hr className="border-t-4 border-rose-500 w-20 md:w-24 mx-auto mb-5 shadow-lg" />
          <div className="flex justify-center gap-2 text-base md:text-lg font-semibold">
            <span className="hover:text-rose-300 cursor-pointer transition-all">
              Home
            </span>
            <span>/</span>
            <span className="text-rose-300">About</span>
          </div>
        </div>
      </section>

      <Container>
        <section>
          <div className="w-full bg-slate-100 rounded-tl-full rounded-br-full flex flex-col md:flex-row items-center justify-center relative py-10 md:py-16">
            <div className="max-w-[800px] mx-auto text-black flex flex-col gap-2 px-4 md:px-0 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-rose-800">
                AY Construction
              </h1>
              <p className="text-slate-600 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis itaque, nam quidem ipsam, a dignissimos voluptas amet
                nesciunt sequi cumque excepturi neque odio possimus. Reiciendis
                beatae eligendi minima nemo fuga.
              </p>
            </div>

            <Image
              src="/blog_1.jpg"
              alt="about image"
              width={220}
              height={220}
              className="object-cover about-image absolute bottom-3 left-4 md:left-10"
            />
            <Image
              src="/formimage.jpg"
              alt="about image"
              width={220}
              height={220}
              className="object-cover about-image absolute top-5 right-4 md:right-10"
            />
          </div>

          <div className="w-full min-h-[70vh] grid lg:grid-cols-2 grid-cols-1 mt-10 gap-6">
            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-3 px-4">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="message-card bg-slate-100 max-w-[540px] w-full min-h-[92px] flex items-center gap-4 p-4 rounded-tl-xl rounded-bl-4xl rounded-tr-4xl relative animate-card border-l-rose-800 border-l-2 second-left-first-div"
                  >
                    <div className="flex items-start gap-4 w-full">
                      <div className="bg-slate-100 rounded-full p-1 flex items-center justify-center absolute top-2 left-2 shadow-lg">
                        {item.icon}
                      </div>
                      <div className="pl-10">
                        <h2 className="text-lg font-semibold leading-tight">
                          {item.title}
                        </h2>
                        <p className="text-sm text-gray-700">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center py-10">
              <div className="relative">
                <Image
                  src="/p1.jpg"
                  alt="image"
                  width={500}
                  height={500}
                  className="object-cover about-second-first-img rounded-lg"
                />

                <Image
                  src="/p2.jpg"
                  alt="image"
                  width={180}
                  height={180}
                  className="absolute -top-5 -left-5 md:-top-10 md:-left-10 object-cover rounded-lg shadow-lg"
                />
                <Image
                  src="/p4.jpg"
                  alt="image"
                  width={180}
                  height={180}
                  className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-10">
            <div className="relative p-2 flex justify-center md:justify-start">
              <div className="w-full max-w-[400px] h-60 md:h-72 relative alijutt">
                <Image
                  src="/service-3.jpg"
                  alt="image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <div className="w-28 h-28 md:w-36 md:h-36 absolute top-16 left-44 md:top-24 md:left-64">
                <Image
                  src="/safety-briefing.webp"
                  alt="image"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div>

            <div className="p-4 md:p-6 flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-rose-800">
                Our Mission
              </h1>
              <p className="text-[13px] md:text-base text-slate-600">
                Our mission is to provide exceptional construction services that
                consistently exceed client expectations. We strive to deliver
                innovative solutions tailored to the unique needs of each
                project, ensuring high-quality workmanship.
              </p>

              <div className="flex flex-col gap-2 mt-3 text-[13px] md:text-base">
                <div className="flex gap-2 items-center">
                  <IoCheckmarkDoneSharp className="text-green-700" />
                  <span>Fostering Sustainable Growth</span>
                </div>
                <div className="flex gap-2 items-center">
                  <IoCheckmarkDoneSharp className="text-green-700" />
                  <span>Innovating for a Sustainable Future</span>
                </div>
                <div className="flex gap-2 items-center">
                  <IoCheckmarkDoneSharp className="text-green-700" />
                  <span>Customer-Centric Approach</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-72 md:h-96 relative mt-10">
            <Image
              src="/vedio-img.jpg"
              alt="image"
              fill
              className="object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute inline-flex h-16 w-16 md:h-20 md:w-20 animate-ping rounded-full bg-rose-800 opacity-75"></span>
                  <span className="relative inline-flex h-16 w-16 md:h-20 md:w-20 rounded-full bg-rose-800 opacity-0"></span>
                </span>

                <div className="relative text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16 md:w-20 md:h-20"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653v12.694a.75.75 0 001.125.65l10.5-6.347a.75.75 0 000-1.3L6.375 5.002a.75.75 0 00-1.125.65z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}
