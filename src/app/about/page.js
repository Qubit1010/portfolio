import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FiArrowUpRight } from "react-icons/fi";

export const metadata = {
  title: "About",
  description: "About Page of my portfolio",
};

export default function About() {
  return (
    <>
      <Header />
      <main className="w-10/12 h-auto mx-auto">
        {/* container */}
        <div>
          <h1 className="text-5xl font-semibold text-center mt-8 ">
            Aleem-Ul-Hassan
          </h1>
          <h2 className="text-3xl font-semibold text-center text-primary mt-4">
            Web-Developer
          </h2>
          {/* <p className="w-2/4 mx-auto text-center">
            I&apos;m Aleem Ul Hassan, a proactive full-stack web developer currently
            pursuing dual bachelor&apos;s degrees in Computer Science from IU
            International in Germany and Artificial Intelligence from Iqra
            University in Karachi. My professional journey includes roles as an
            Estate Supervisor at SDC in Quetta, a Frontend Web Developer at
            Machotics in Karachi, and a Frontend React Web Developer at Precise
            Tech in a remote capacity. Currently, I thrive as a freelancer on
            Upwork and Fiverr, offering tailored solutions. My academic pursuits
            and real-world experience converge, fueling my passion for creating
            innovative web solutions in the dynamic tech landscape.
          </p> */}
          {/* Education */}
          <section>
            {/* container */}
            <div className="w-10/12 h-auto py-6 grid grid-cols-2 my-16 mx-auto bg-gray-900 rounded">
              <div className="flex flex-col items-center justify-center ">
                <h2 className="text-3xl font-bold ">Education</h2>{" "}
                <Link
                  className="bg-primary mt-4 p-3 rounded hover:bg-slate-800 "
                  href="https://www.linkedin.com/in/qubit-state-253b0b201/"
                >
                  Learn More
                </Link>
              </div>
              <div className="w-full grid grid-cols-2 gap-6 p-8">
                {/* Block */}
                <div className="h-36 flex flex-col bg-primary p-4 rounded-lg items-center justify-center">
                  <h2 className="text-gray-900 font-bold text-xl text-center">
                    Matric / Primary School
                  </h2>
                  <h2 className="mt-2 text-sm text-center">
                    Cambridge School, Quetta
                  </h2>
                </div>
                {/* Block */}
                <div className="h-36 flex flex-col bg-primary p-4 rounded-lg items-center justify-center">
                  <h2 className="text-gray-900 font-bold text-xl text-center">
                    Intermediate / High School
                  </h2>
                  <h2 className="mt-2 text-sm text-center">
                    Islamia College, Quetta
                  </h2>
                </div>
                {/* Block */}
                <div className="h-36 flex flex-col bg-primary p-4 rounded-lg items-center justify-center">
                  <h2 className="text-gray-900 font-bold text-xl text-center">
                    BS in Computer Science
                  </h2>
                  <h2 className="mt-2 text-sm text-center">
                    IU International, Germany(online)
                  </h2>
                </div>
                {/* Block */}
                <div className="h-36 flex flex-col bg-primary p-4 rounded-lg items-center justify-center">
                  <h2 className="text-gray-900 font-bold text-xl text-center">
                    BS in Artificial Intelligence
                  </h2>
                  <h2 className="mt-2 text-sm text-center">
                    Iqra University, Karachi
                  </h2>
                </div>
              </div>
            </div>
          </section>
          {/* Experience */}
          <section>
            {/* container */}
            <div className="w-10/12 h-auto py-6 grid grid-cols-2 my-16 mx-auto bg-gray-900 rounded">
              <div className="w-full grid grid-cols-2 gap-6 p-8">
                {/* Block */}
                <div className="h-36 flex flex-col bg-primary p-4 rounded-lg items-center justify-center">
                  <h2 className="text-gray-900 font-bold text-xl text-center">
                    SDC
                  </h2>
                  <h2 className="mt-2 text-sm text-center">
                    C&W Department - Quetta
                  </h2>
                </div>
                {/* Block */}
                <div className="h-36 flex flex-col bg-primary p-4 rounded-lg items-center justify-center">
                  <h2 className="text-gray-900 font-bold text-xl text-center">
                    Estate Supervisor
                  </h2>
                  <h2 className="mt-2 text-sm text-center">
                    Sindh Govt. Officers Club - Karachi
                  </h2>
                </div>
                {/* Block */}
                <div className="h-36 flex flex-col bg-primary p-4 rounded-lg items-center justify-center">
                  <h2 className="text-gray-900 font-bold text-xl text-center">
                    Frontend Web Developer
                  </h2>
                  <h2 className="mt-2 text-sm text-center">
                    Machotics - Karachi
                  </h2>
                </div>
                {/* Block */}
                <div className="h-36 flex flex-col bg-primary p-4 rounded-lg items-center justify-center">
                  <h2 className="text-gray-900 font-bold text-xl text-center">
                    Frontend React Web Develpoer
                  </h2>
                  <h2 className="mt-2 text-sm text-center">
                    Precise Tech - Remote
                  </h2>
                </div>
                {/* Block */}
                <div className="h-36 col-span-2 flex flex-col bg-primary p-4 rounded-lg items-center justify-center">
                  <h2 className="text-gray-900 font-bold text-xl text-center">
                    Freelancer At
                  </h2>
                  <h2 className="mt-2 text-sm text-center">Upwork & Fiverr</h2>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h2 className="text-3xl font-bold ">Experience</h2>{" "}
                <Link
                  className="bg-primary mt-4 p-3 rounded hover:bg-slate-800 "
                  href="https://www.linkedin.com/in/qubit-state-253b0b201/"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>

          <div className="flex items-center justify-center my-24">
            <Link
              className="text-4xl font-bold inline-flex text-center mx-auto border-b-4 py-2 px-8 border-primary"
              href="https://drive.google.com/file/d/11iF2QCNoMT0SCHBa0iQeOM9F68sclxsY/view?usp=sharing"
              target="blank"
            >
              Download My CV/Resume{" "}
              <span>
                <FiArrowUpRight className="text-primary" />
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
