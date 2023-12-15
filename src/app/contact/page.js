import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiGooglemessages, SiUpwork, SiFiverr } from "react-icons/si";
import { MdLocationOn, MdMessage } from "react-icons/md";

export const metadata = {
  title: "Contact",
  description: "Contact Page of my portfolio",
};

export default function Contact() {
  return (
    <>
      <Header />
      <main className="">
        {/* Contact Main Section */}
        <section>
          {/* <h3 className="text-5xl font-bold text-center">Testimonials</h3> */}
          {/* container */}
          <div className="w-10/12 h-auto py-16 md:grid grid-cols-2 my-16 mx-auto bg-gray-900">
            <div className="flex flex-col items-start justify-start p-16">
              <h2 className="text-3xl font-extrabold">Contact Information</h2>
              <h2 className="w-3/4 text-lg font-semibold mt-4 text-primary">
                Describe what you want in the form or just contact me via links
                provided.
              </h2>
              {/* Info Block */}
              <div className="flex flex-col items-start gap-4 mt-16">
                <div className="flex items-center justify-center gap-4 ">
                  <FaPhoneAlt className="text-xl text-primary" />
                  <h2 className="text-lg ">010-4996-333</h2>
                </div>

                <div className="flex items-center justify-center gap-4 ">
                  <MdEmail className="text-xl text-primary" />
                  <h2 className="text-lg">hassanaleem86@gmail.com</h2>
                </div>
              </div>
              {/* Links Block */}
              <div className="flex items-start gap-4 mt-16">
                <Link href="https://github.com/Qubit1010" target="_blank">
                  <FaGithub className="text-white text-4xl" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/qubit-state-253b0b201/"
                  target="_blank"
                >
                  <FaLinkedin className="text-white text-4xl" />
                </Link>
                <Link
                  href="https://www.upwork.com/freelancers/qubit1010"
                  target="_blank"
                >
                  <SiUpwork className="text-white text-4xl" />
                </Link>
                <Link
                  href="https://www.fiverr.com/qubit10?public_mode=true"
                  target="_blank"
                >
                  <SiFiverr className="text-white text-4xl" />
                </Link>
              </div>
            </div>
            <div className="w-full flex items-center justify-center ">
              <form className="w-9/12 bg-primary p-8 rounded">
                {/* form field */}
                <div className="relative flex flex-col">
                  <label className="font-semibold mb-1" htmlFor="name">
                    Name
                  </label>
                  <div className="absolute top-10 left-2">
                    <BsFillPersonFill className="text-xl text-secondary" />
                  </div>
                  <input
                    className="py-3 px-8 text-secondary rounded"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                {/* form field */}
                <div className="relative flex flex-col mt-4">
                  <label className="font-semibold mb-1" htmlFor="name">
                    Email
                  </label>
                  <div className="absolute top-10 left-2">
                    <MdEmail className="text-xl text-secondary" />
                  </div>
                  <input
                    className="py-3 px-8 text-secondary rounded"
                    type="text"
                    id="name"
                    required
                  />
                </div>
                {/* form field */}
                <div className="relative flex flex-col mt-4">
                  <label className="font-semibold mb-1" htmlFor="name">
                    Email
                  </label>
                  <div className="absolute top-10 left-2">
                    <MdMessage className="text-xl text-secondary" />
                  </div>
                  <textarea
                    className="rounded py-2 px-8 text-secondary"
                    name=""
                    id="message"
                    cols="5"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button className="bg-secondary py-3 px-6 mt-4 rounded hover:bg-slate-800">
                  Submit
                </button>
                {/* 
                <Link
                  className="bg-secondary p-4 rounded hover:bg-slate-800 "
                  href="/contact"
                >
                  Contact Me
                </Link> */}
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
