"use client";
import Link from "next/link";
import Header from "@/components/Header";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
// import Slider from "react-slick";

import Image from "next/image";

import { TbArrowBigDownLines } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineAntDesign } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import LatestImg from "/public/images/LatestPic1.png";
import LatestImg2 from "/public/images/LatestPic2.png";
import LatestImg3 from "/public/images/LatestPic3.png";
import LatestImg4 from "/public/images/LatestPic4.png";
import LatestImg5 from "/public/images/LatestPic5.png";
import LatestImg6 from "/public/images/LatestPic6.png";

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
                I'm Aleem-Ul-Hassan
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
        </div>
      </section>
      {/* Latest Project Section */}
      <section>
        {/* container */}
        <div className="w-10/12 mx-auto py-32 ">
          <Swiper
            navigation
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <div className="p-8 text-blue-400">
              <SwiperSlide style={{ height: "380px" }}>
                <div
                  className="h-full relative bg-cover bg-center flex flex-col items-center justify-center gap-8"
                  style={{
                    backgroundImage: 'url("/public/images/LatestPic2.png")',
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <h1>Slide 1</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: "380px" }}>
                <div className="h-full flex flex-col items-center justify-center gap-8  bg-gray-900">
                  <h1>Slide 1</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: "380px" }}>
                <div className="h-full flex flex-col items-center justify-center gap-8  bg-gray-900">
                  <h1>Slide 1</h1>
                </div>
              </SwiperSlide>
              <SwiperSlide style={{ height: "380px" }}>
                <div className="h-full flex flex-col items-center justify-center gap-8  bg-gray-900">
                  <h1>Slide 1</h1>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
    </main>
  );
}
