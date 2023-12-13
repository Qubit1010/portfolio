"use client";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
// import Slider from "react-slick";
import Image from "next/image";
import TestLogo from "/public/images/TestiLogo.png";
import TestLogo2 from "/public/images/TestiLogo2.png";
import TestLogo3 from "/public/images/TestiLogo3.png";
import TestLogo4 from "/public/images/TestiLogo4.png";
import TestLogo5 from "/public/images/TestiLogo5.png";

import { TbArrowBigDownLines } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaCode, FaQuoteLeft } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNode,
  FaDatabase,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {
  SiRedux,
  SiFirebase,
  SiWebflow,
  SiGit,
  SiGithub,
} from "react-icons/si";

import LatestImg from "/public/images/LatestPic1.png";
import LatestImg2 from "/public/images/LatestPic2.png";
import LatestImg3 from "/public/images/LatestPic3.png";
import LatestImg4 from "/public/images/LatestPic4.png";
import LatestImg5 from "/public/images/LatestPic5.png";
import LatestImg6 from "/public/images/LatestPic6.png";
import LatestImg7 from "/public/images/LatestPic7.png";

import SlideImg from "/public/images/SlideProject1.png";
import SlideImg2 from "/public/images/SlideProject2.png";
import SlideImg3 from "/public/images/SlideProject3.png";
import SlideImg4 from "/public/images/SlideProject4.png";
import SlideImg5 from "/public/images/SlideProject5.png";
import SlideImg6 from "/public/images/SlideProject6.png";
import SlideImg7 from "/public/images/SlideProject7.png";
import SlideImg8 from "/public/images/SlideProject8.png";
import SlideImg9 from "/public/images/SlideProject9.png";
import SlideImg10 from "/public/images/SlideProject10.png";
import SlideImg11 from "/public/images/SlideProject11.png";
import SlideImg12 from "/public/images/SlideProject12.png";

import TestimonialImg from "/public/images/TestimonialPic1.jpg";
import TestimonialImg2 from "/public/images/TestimonialPic5.jpg";
import TestimonialImg3 from "/public/images/TestimonialPic4.png";
import TestimonialImg4 from "/public/images/TestimonialPic6.png";
import TestimonialImg5 from "/public/images/TestimonialPic7.jpg";

// Import Swiper styles
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export const metadata = {
//   title: "Home",
//   description: "Main Page of my portfolio",
// };

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="bg-secondary h-96">
      <Header />
      {/* Hero Section */}
      <section>
        <div className="w-10/12 mx-auto pb-20 pt-10">
          {/* top-content */}
          <div className="flex items-center justify-between mb-16">
            <h3 className="text-4xl font-bold text-primary">Hello!</h3>
            <div>
              <div className="  border-4 border-secondary border-b-white">
                <TbArrowBigDownLines className="right-block-icon" />
              </div>
              <p>Get a quality service</p>
            </div>
          </div>
          {/* bottom-content */}
          <div className="flex items-center justify-between ">
            {/* left-content */}
            <div>
              <h1 className="text-6xl font-bold">
                I&apos;m Aleem-Ul-Hassan
                <FiArrowUpRight className="inline-block  text-primary -translate-y-8" />
              </h1>
              <h1 className="text-3xl text-sky-300 font-bold my-4">
                Full Stack Web Developer
              </h1>
              <p className="w-3/6 text-xl text-justify">
                As a dedicated web developer, I am deeply committed to crafting
                visually compelling websites that captivate and engage users.
                Armed with extensive experience in full-stack development and a
                top-rated status on Upwork, I am currently pursuing an AI degree
                to augment my skills and remain abreast of evolving technologies
                and design trends. My unwavering commitment to excellence in the
                field guarantees unparalleled results for my clients.
              </p>
            </div>
            {/* right-content */}
            <div className="w-1/2 flex flex-col items-start justify-between gap-8">
              <div>
                <h3 className="text-5xl font-bold">3+</h3>
                <h4 className="text-base	 font-bold text-gray-400">
                  Years of experience
                </h4>
              </div>
              <div>
                <h3 className="text-5xl font-bold">100%</h3>
                <h4 className="text-base	 font-bold text-gray-400">
                  Success rate
                </h4>
              </div>
              <div>
                <h3 className="text-5xl font-bold">45</h3>
                <h4 className="text-base	 font-bold text-gray-400">
                  Projects Completed
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section */}
      <section>
        <div className="bg-gray-900 py-16">
          {/* top-content */}
          <div>
            <h3 className="text-5xl font-bold text-center">Services</h3>
            <h4 className="text-center mt-4">
              We put quality and clients requirements on top of the priority
              list.
            </h4>
          </div>
          {/* bottom-content */}
          <div className="w-3/4 mx-auto my-8 grid grid-cols-3 gap-8 mt-16">
            <div className="h-96 flex flex-col items-center justify-start pt-16 gap-4 px-4 bg-primary rounded-md">
              <BsPeopleFill className="text-6xl" />
              <h1 className="text-2xl font-bold">UI/UX Design</h1>
              <p className="font-semibold text-center">
                I can provide you with the best UI/UX design experience.
              </p>
            </div>

            <div className="h-96 flex flex-col items-center justify-start pt-16 gap-4 px-4 bg-white rounded-md">
              <AiOutlineAntDesign className="text-6xl text-gray-900" />
              <h1 className="text-2xl text-gray-900 font-bold">
                Indentity Design
              </h1>
              <p className="font-semibold text-gray-900 text-center">
                I have experience in graphics design too, and can create
                identity logo or business cards etc..
              </p>
            </div>

            <div className="h-96 flex flex-col items-center justify-start pt-16 gap-4 px-4 bg-primary rounded-md">
              <FaCode className="text-6xl" />
              <h1 className="text-2xl font-bold">Development</h1>
              <p className="font-semibold text-center">
                I can create website from using frontend technologies like
                HTML/CSS/JavaScript and frontend frameworks like
                React/Bootsrape/Firebase and other Web APIs. I can also create
                website on CMS like webflow.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Project Section */}
      <section>
        {/* container */}
        <div className="w-10/12 mx-auto py-32 ">
          <h3 className="text-5xl font-bold text-center mb-24">
            Latest Projects
          </h3>
          {/* block */}
          <div className="grid grid-cols-2" style={{ height: "380px" }}>
            {/* left */}
            <div className="">
              <Image
                className="h-full"
                alt="LatestImage-Portfolio"
                src={LatestImg}
              />
            </div>
            {/* right */}
            <div className="flex flex-col items-center justify-center  gap-8 px-24 bg-primary">
              <h2 className="text-3xl font-bold text-secondary">Nucleairs</h2>
              <p className="font-semibold text-center">
                A website that I developed with latest tech stack and integrated
                payment functionality for a client on Upwork.
              </p>
              <Link
                className="p-3 px-4 border-2	border-secondary rounded-xl"
                href="https://www.nucleairs.com/"
                target="_blank"
              >
                <FiArrowRight className="text-secondary" />
              </Link>
            </div>
          </div>
          {/* block 2nd*/}
          <div className="grid grid-cols-2" style={{ height: "380px" }}>
            {/* right */}
            <div className="flex flex-col items-center justify-center gap-8 px-24 bg-gray-900 ">
              <h2 className="text-3xl font-bold text-primary">Smartlead</h2>
              <p className="font-semibold text-center">
                A website that I worked on for a client on Upwork.
              </p>
              <Link
                className="p-3 px-4 border-2	border-primary rounded-xl"
                href="https://www.smartlead.ai/"
                target="_blank"
              >
                <FiArrowRight className="text-primary" />
              </Link>
            </div>
            {/* left */}
            <div className="">
              <Image className="h-full" alt="logo" src={LatestImg2} />
            </div>
          </div>
          {/* block */}
          <div className="grid grid-cols-2" style={{ height: "380px" }}>
            {/* left */}
            <div className="">
              <Image
                className="h-full"
                alt="LatestImage-Portfolio"
                src={LatestImg3}
              />
            </div>
            {/* right */}
            <div className="flex flex-col items-center justify-center  gap-8 px-24 bg-primary">
              <h2 className="text-3xl font-bold text-secondary">Model&Brand</h2>
              <p className="font-semibold text-center">
                A website that I modeling agency website developed for a client
                on Upwork.
              </p>
              <Link
                className="p-3 px-4 border-2	border-secondary rounded-xl"
                href="https://www.modelsandbrand.com/"
                target="_blank"
              >
                <FiArrowRight className="text-secondary" />
              </Link>
            </div>
          </div>
          {/* block 2nd*/}
          <div className="grid grid-cols-2" style={{ height: "380px" }}>
            {/* right */}
            <div className="flex flex-col items-center justify-center gap-8 px-24 bg-gray-900 ">
              <h2 className="text-3xl font-bold text-primary">SI-HER</h2>
              <p className="font-semibold text-center">
                A crypto exchange info website developed for Fiver client.
              </p>
              <Link
                className="p-3 px-4 border-2	border-primary rounded-xl"
                href="https://www.smartlead.ai/"
                target="_blank"
              >
                <FiArrowRight className="text-primary" />
              </Link>
            </div>
            {/* left */}
            <div className="">
              <Image className="h-full" alt="logo" src={LatestImg4} />
            </div>
          </div>
          {/* block */}
          <div className="grid grid-cols-2" style={{ height: "380px" }}>
            {/* left */}
            <div className="">
              <Image
                className="h-full"
                alt="LatestImage-Portfolio"
                src={LatestImg5}
              />
            </div>
            {/* right */}
            <div className="flex flex-col items-center justify-center  gap-8 px-24 bg-primary">
              <h2 className="text-3xl font-bold text-secondary">
                Lostinfluence
              </h2>
              <p className="font-semibold text-center">
                A website that I modeling agency website developed for a client
                on Upwork.
              </p>
              <Link
                className="p-3 px-4 border-2	border-secondary rounded-xl"
                href="https://www.modelsandbrand.com/"
                target="_blank"
              >
                <FiArrowRight className="text-secondary" />
              </Link>
            </div>
          </div>
          {/* block 2nd*/}
          <div className="grid grid-cols-2" style={{ height: "380px" }}>
            {/* right */}
            <div className="flex flex-col items-center justify-center gap-8 px-24 bg-gray-900 ">
              <h2 className="text-3xl font-bold text-primary">Chat App</h2>
              <p className="font-semibold text-center">
                a Node.js, Express, HTML, and JavaScript project developed for a
                client on Upwork.
              </p>
              <Link
                className="p-3 px-4 border-2	border-primary rounded-xl"
                href="https://www.smartlead.ai/"
                target="_blank"
              >
                <FiArrowRight className="text-primary" />
              </Link>
            </div>
            {/* left */}
            <div className="">
              <Image className="h-full" alt="logo" src={LatestImg6} />
            </div>
          </div>
          {/* block */}
          <div className="grid grid-cols-2" style={{ height: "380px" }}>
            {/* left */}
            <div className="">
              <Image
                className="h-full"
                alt="LatestImage-Portfolio"
                src={LatestImg7}
              />
            </div>
            {/* right */}
            <div className="flex flex-col items-center justify-center  gap-8 px-24 bg-primary">
              <h2 className="text-3xl font-bold text-secondary">IHeartMile</h2>
              <p className="font-semibold text-center">
                A website that I modeling agency website developed for a client
                on Upwork.
              </p>
              <Link
                className="p-3 px-4 border-2	border-secondary rounded-xl"
                href="https://www.iheart7mile.com/"
                target="_blank"
              >
                <FiArrowRight className="text-secondary" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Skill Section */}
      <section>
        {/* container */}
        <div className="w-10/12 mx-auto py-32 ">
          <h3 className="text-5xl font-bold text-primary text-center mb-4">
            Skill-Set
          </h3>
          {/* divider */}
          <div className="h-2 w-24 bg-white m-auto rounded"></div>
          <div className="grid grid-cols-5 gap-4 mt-16">
            <div className="flex flex-col items-center justify-center p-10 rounded bg-white">
              <FaHtml5 className="text-5xl text-primary" />
              <h2 className="text-2xl font-bold text-primary">HTML</h2>
            </div>

            <div className="flex flex-col items-center justify-center p-10 rounded bg-white">
              <FaCss3 className="text-5xl text-primary" />
              <h2 className="text-2xl font-bold text-primary">CSS</h2>
            </div>

            <div className="flex flex-col items-center justify-center p-10 rounded bg-white">
              <DiJavascript1 className="text-5xl text-primary" />
              <h2 className="text-2xl font-bold text-primary">JavaScript</h2>
            </div>

            <div className="flex flex-col items-center justify-center p-10 rounded bg-white">
              <FaReact className="text-5xl text-primary" />
              <h2 className="text-2xl font-bold text-primary">React</h2>
            </div>

            <div className="flex flex-col items-center justify-center p-10 rounded bg-white">
              <SiRedux className="text-5xl text-primary" />
              <h2 className="text-2xl font-bold text-primary">Redux</h2>
            </div>

            <div className="flex flex-col items-center justify-center p-10 rounded bg-gray-900">
              <SiWebflow className="text-5xl text-primary" />
              <h2 className="text-2xl font-bold text-primary">Webflow</h2>
            </div>

            <div className="flex flex-col items-center justify-center p-10 rounded bg-gray-900">
              <FaNode className="text-5xl text-primary" />
              <h2 className="text-2xl font-bold text-primary">NodeJs</h2>
            </div>

            <div className="flex flex-col items-center justify-center p-10 rounded bg-gray-900">
              <FaDatabase className="text-5xl text-primary" />
              <h2 className="text-2xl font-bold text-primary">Mongo DB</h2>
            </div>

            <div className="flex flex-col items-center justify-center p-10 rounded bg-gray-900">
              <FaFigma className="text-5xl text-primary" />
              <h2 className="text-2xl font-bold text-primary">Figma</h2>
            </div>

            <div className="flex flex-col items-center justify-center p-10 rounded bg-gray-900">
              <SiFirebase className="text-5xl text-primary" />
              <h2 className="text-2xl font-bold text-primary">Firebase</h2>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Project Section */}
      <section>
        {/* container */}
        <div className="w-10/12 mx-auto py-32 ">
          <h3 className="text-5xl font-bold text-center mb-24">
            More Projects
          </h3>
          <Swiper
            navigation
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <div className="p-8 text-blue-400">
              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://www.promotorz.com/"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2 "
                  >
                    Promotorz
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    A giveaway voting webflow website that is connected to
                    firebase with complex integrations and payment processing.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg2.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center  justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://test-0101-0a18d7.webflow.io/"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2"
                  >
                    Superintelligence
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    A superintelligence is app powered by Open AI APIs build
                    with next js.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg4.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center  justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://martins-stunning-site-d9871f.webflow.io/"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2"
                  >
                    SpanishGym
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    A webflow website that I recently redesigned and developed.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg3.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center  justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://vivacious-crow-shorts.cyclic.app/"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2"
                  >
                    Weather-App
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    A weather-app created with nodej.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg5.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center  justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://github.com/Qubit1010/Snake-Game-In-Python"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2"
                  >
                    Snake Game
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    A Snake Game created in python for an upwork client.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg6.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center  justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://feminism-today.webflow.io/"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2"
                  >
                    Feminism Today
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    A webflow website that I completely redesigned and developed
                    for a client on Upwork.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg7.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center  justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://www.sotagrove.com/"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2"
                  >
                    Sota Grove
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    A website that I recently redesigned and developed.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg8.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center  justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://advance-redux-f5f48.web.app/"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2"
                  >
                    Book Store
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    This is created with react, redux, toolkit, integrated with
                    firebase database adn uploaded to firebase hosting service.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg9.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://test-0101-0a18d7.webflow.io/"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2"
                  >
                    Shadow
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    This sis a single page webflow website.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg10.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://expense-calculator1212.netlify.app/"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2"
                  >
                    Expense Tracker
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    This is a react app that calculates expenses.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg11.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://qubit1010.github.io/Notes-App/"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2"
                  >
                    Note App
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    This is a note taking app created with venilla javascript.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide style={{ height: "380px" }}>
                <div
                  style={{
                    backgroundImage: `url(${SlideImg12.src})`,
                  }}
                  className="h-full relative bg-cover bg-center flex flex-col items-center justify-start pt-32 rounded gap-8"
                >
                  <div className="absolute inset-0 bg-black opacity-80"></div>
                  <Link
                    href="https://qubit1010.github.io/Movie-Search-App/"
                    target="_blank"
                    className="relative z-20 text-lg hover:text-gray-400 font-semibold underline underline-offset-2"
                  >
                    Movie Viewer
                  </Link>
                  <p className="w-3/4 relative z-20  text-center">
                    This movie rating app created with IMDB APIs.
                  </p>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
      {/* Testimonials Section */}
      <section>
        <h3 className="text-5xl font-bold text-center">Testimonials</h3>
        {/* Testimonial BLock */}
        <div>
          {/* container */}
          <div className="w-10/12 mx-auto grid grid-cols-3 py-32 rounded">
            <div className="flex items-center justify-center bg-gray-900">
              <Image className="w-36" alt="logo" src={TestLogo} />
            </div>
            <div className="flex flex-col items-start justify-center gap-8 bg-primary p-16 col-span-2">
              <Image
                className="h-28 w-28 object-cover rounded-full"
                alt="logo"
                src={TestimonialImg}
              />
              <p className="text-xl font-semibold">
                <span>
                  <FaQuoteLeft className="text-secondary  text-2xl mb-4" />
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unbelievable how great
                the service was for this complex project, communication was
                fast, freelancer understood the assignment and asked important
                questions to understand the details well and is super friendly,
                he never got angry when I asked for something extra and
                delivered faster than I expected. Definitely recommended if you
                are looking for a patient freelancer!
              </p>
              <h2 className="text-secondary text-2xl font-bold place-self-end">
                Abdel M Oulhadj
              </h2>
            </div>
          </div>
        </div>
        {/* Testimonial BLock */}
        <div>
          {/* container */}
          <div className="w-10/12 mx-auto grid grid-cols-3 py-32 rounded">
            <div className="flex items-center justify-center bg-gray-900">
              <Image className="w-16" alt="logo" src={TestLogo2} />
            </div>
            <div className="flex flex-col items-start justify-center gap-8 bg-primary p-16 col-span-2">
              <Image
                className="h-28 w-28 object-cover rounded-full"
                alt="logo"
                src={TestimonialImg2}
              />
              <p className="text-xl font-semibold">
                <span>
                  <FaQuoteLeft className="text-secondary  text-2xl mb-4" />
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aleem completed all
                the requirements successfully and on time. His communication was
                good and he was easy to work with. Recommended!
              </p>
              <h2 className="text-secondary text-2xl font-bold place-self-end">
                Sarah Thompsen
              </h2>
            </div>
          </div>
        </div>
        {/* Testimonial BLock */}
        <div>
          {/* container */}
          <div className="w-10/12 mx-auto grid grid-cols-3 py-32 rounded">
            <div className="flex items-center justify-center bg-gray-900">
              <Image className="w-16" alt="logo" src={TestLogo3} />
            </div>
            <div className="flex flex-col items-start justify-center gap-8 bg-primary p-16 col-span-2">
              <Image
                className="h-28 w-28 object-cover object-top rounded-full"
                alt="logo"
                src={TestimonialImg3}
              />
              <p className="text-xl font-semibold">
                <span>
                  <FaQuoteLeft className="text-secondary  text-2xl mb-4" />
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Throughout the
                project, Aleem was a true professional. He understood my project
                requirements and provided valuable input on the development
                process. Aleem informed me of progress throughout the project
                and was always responsive to any concerns or questions.
              </p>
              <h2 className="text-secondary text-2xl font-bold place-self-end">
                Martin Lostak
              </h2>
            </div>
          </div>
        </div>
        {/* Testimonial BLock */}
        <div>
          {/* container */}
          <div className="w-10/12 mx-auto grid grid-cols-3 py-32 rounded">
            <div className="flex items-center justify-center bg-gray-900">
              <Image className="w-24" alt="logo" src={TestLogo4} />
            </div>
            <div className="flex flex-col items-start justify-center gap-8 bg-primary p-16 col-span-2">
              <Image
                className="h-28 w-28 object-cover rounded-full"
                alt="logo"
                src={TestimonialImg4}
              />
              <p className="text-xl font-semibold">
                <span>
                  <FaQuoteLeft className="text-secondary  text-2xl mb-4" />
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Great work done here!
                Very attentive and communicates well! Would definitely consider
                Qubit for additional work!! 10 out 10!
              </p>
              <h2 className="text-secondary text-2xl font-bold place-self-end">
                Evan
              </h2>
            </div>
          </div>
        </div>
        {/* Testimonial BLock */}
        <div>
          {/* container */}
          <div className="w-10/12 mx-auto grid grid-cols-3 py-32 rounded">
            <div className="flex items-center justify-center bg-gray-900">
              <Image className="w-32" alt="logo" src={TestLogo5} />
            </div>
            <div className="flex flex-col items-start justify-center gap-8 bg-primary p-16 col-span-2">
              <Image
                className="h-28 w-28 object-cover rounded-full"
                alt="logo"
                src={TestimonialImg5}
              />
              <p className="text-xl font-semibold">
                <span>
                  <FaQuoteLeft className="text-secondary  text-2xl mb-4" />
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aleem is very
                understanding and responsive to any feedback I give him. Truly a
                talented freelancer and I recommend him to any web dev.
                project!!
              </p>
              <h2 className="text-secondary text-2xl font-bold place-self-end">
                Radovan Stevanovic
              </h2>
            </div>
          </div>
        </div>
      </section>
      {/*Footer*/}
      <Footer />
    </main>
  );
}
