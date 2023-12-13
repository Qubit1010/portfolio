import Link from "next/link";
import Logo from "/public/Logo.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import Image from "next/image";

export default function Header() {
  return (
    <header className="w-10/12 mx-auto  flex items-center justify-between gap-8 p-8 px-0">
      <nav className="flex gap-8 ">
        {/* <Link href="/" className="text-white text-xl font-semibold	">
          Home
        </Link> */}
        <Link href="/about" className="text-white text-xl font-semibold	">
          About
        </Link>
        <Link href="/contact" className="text-white text-xl font-semibold	">
          Contact
        </Link>
      </nav>

      <Link href="/">
        <Image className="w-24" alt="logo" src={Logo} />
      </Link>

      {/* <Link href="/contact" className="text-white text-xl">
        Contact
      </Link>
      <Link href="/blog" className="text-white text-xl">
        Blog
      </Link>
      <Link href="/posts" className="text-white text-xl">
        Post
      </Link>
      <Link href="/products" className="text-white text-xl">
        Products
      </Link>
      <Link href="/profile" className="text-white text-xl">
      Profile
    </Link> */}
      <nav className="flex gap-4">
        <Link href="https://github.com/Qubit1010" target="_blank">
          <FaGithub className="text-white text-xl" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/qubit-state-253b0b201/"
          target="_blank"
          className="text-white text-xl"
        >
          <FaLinkedin />
        </Link>
      </nav>
    </header>
  );
}
