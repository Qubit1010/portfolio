import Link from "next/link";
import Logo from "/public/Logo.svg";
import { FaLinkedin, FaGithub, FaFacebookSquare } from "react-icons/fa";

import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-3 ">
        {/* Left Block */}
        <div className="flex flex-col items-center justify-between bg-gray-900 py-8 px-8">
          <Image className="w-62" alt="logo" src={Logo} />

          <h2 className="text-sm">Copyright © 2023 Qubit | All rights reserved.</h2>
        </div>

        {/* Right Block */}
        <div className="flex flex-col items-center justify-center bg-primary col-span-2 gap-8 p-16">
          <h1 className="md:w-2/4 md:text-6xl text-4xl leading-snug text-center font-bold">
            Ready to work with me?
          </h1>
          <Link
            className="bg-secondary p-4 rounded hover:bg-slate-800 "
            href="/contact"
          >
            Contact Me
          </Link>
          <nav className="flex gap-4 mt-4">
            <Link href="https://github.com/Qubit1010" target="_blank">
              <FaGithub className="text-secondary hover:text-white text-5xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/qubit-state-253b0b201/"
              target="_blank"
              className="text-secondary hover:text-white text-5xl"
            >
              <FaLinkedin />
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
