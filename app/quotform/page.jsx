"use client";
import Image from "next/image"
import Button from  "@/components/button"
import {
  FaUser,FaEnvelope,FaPhone,FaPencilAlt,FaCalendarAlt,FaTools,
} from "react-icons/fa";

export default function GqoutFrom() {
  return (
    <>
      {/* Top Section */}
      <section className="relative bg-[url('/bg.jpg')] bg-cover bg-center h-[400px] flex items-center justify-center group">
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative text-center text-white px-6 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-wider drop-shadow-2xl">
            Request a Quote
          </h1>

          <hr className="border-t-4 border-rose-500 w-24 mx-auto mb-5 shadow-lg" />

          <div className="flex justify-center gap-2 text-lg font-semibold">
            <span className="hover:text-rose-300 cursor-pointer transition-all">Home</span>
            <span>/</span>
            <span className="text-rose-300">Quote</span>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-20  overflow-hidden">

        {/* Soft Shapes */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-rose-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-300/10 rounded-full blur-xl"></div>

        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left Form */}
            <div className="bg-white/70 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-rose-100">
              <h3 className="text-3xl font-semibold text-rose-800 mb-6">Request a Quote</h3>

              <form className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Full Name */}
                  <div>
                    <label className="text-xs font-medium text-slate-500 ml-1">Full Name</label>
                    <div className="relative mt-1">
                      <FaUser className="absolute left-3 top-3 text-rose-800 text-lg" />
                      <input
                        type="text"
                        placeholder="Enter Name"
                        className="w-full border border-rose-200/70 rounded-md focus:border-rose-800 outline-none py-2 px-10 text-slate-700 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-xs font-medium text-slate-500 ml-1">Email Address</label>
                    <div className="relative mt-1">
                      <FaEnvelope className="absolute left-3 top-3 text-rose-800 text-lg" />
                      <input
                        type="email"
                        placeholder="example@gmail.com"
                        className="w-full border border-rose-200/70 rounded-md focus:border-rose-800 outline-none py-2 px-10 text-slate-700 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-medium text-slate-500 ml-1">Phone Number</label>
                    <div className="relative mt-1">
                      <FaPhone className="absolute left-3 top-3 text-rose-800 text-lg" />
                      <input
                        type="text"
                        placeholder="+92 123 4567890"
                        className="w-full border border-rose-200/70 rounded-md focus:border-rose-800 outline-none py-2 px-10 text-slate-700 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="text-xs font-medium text-slate-500 ml-1">Select Service</label>
                    <div className="relative mt-1">
                      <FaTools className="absolute left-3 top-3 text-rose-800 text-lg" />
                      <select
                        className="w-full border border-rose-200/70 rounded-md focus:border-rose-800 outline-none py-2 px-10 text-slate-700 shadow-sm bg-white"
                      >
                        <option>Select</option>
                        <option>House Construction</option>
                        <option>Grey Structure Construction</option>
                        <option>Finishing & Interior</option>
                        <option>Renovation Work</option>
                        <option>Architectural Design</option>
                        <option>Commercial Building</option>
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="text-xs font-medium text-slate-500 ml-1">Site Visit Date</label>
                    <div className="relative mt-1">
                      <FaCalendarAlt className="absolute left-3 top-3 text-rose-800 text-lg" />
                      <input
                        type="date"
                        className="w-full border border-rose-200/70 rounded-md focus:border-rose-800 outline-none py-2 px-10 text-slate-700 shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label className="text-xs font-medium text-slate-500 ml-1">Preferred Time</label>
                    <div className="relative mt-1">
                      <FaCalendarAlt className="absolute left-3 top-3 text-rose-800 text-lg" />
                      <input
                        type="time"
                        className="w-full border border-rose-200/70 rounded-md focus:border-rose-800 outline-none py-2 px-10 text-slate-700 shadow-sm"
                      />
                    </div>
                  </div>

                </div>

                {/* Details */}
                <div>
                  <label className="text-xs font-medium text-slate-500 ml-1">Project Details</label>
                  <div className="relative mt-1">
                    <FaPencilAlt className="absolute left-3 top-3 text-rose-800 text-lg" />
                    <textarea
                      placeholder="Describe your project, plot size, requirements..."
                      className="w-full h-32 border border-rose-200/70 rounded-md focus:border-rose-800 outline-none py-2 px-10 resize-none text-slate-700 shadow-sm"
                    ></textarea>
                  </div>
                </div>

                {/* Button */}
                <span>
                  <Button label="BOOK APPOINTMENT" />
                </span>

              </form>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src="/projects_6.jpg"
                alt="image form"
                fill
                className="object-cover rounded-2xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
