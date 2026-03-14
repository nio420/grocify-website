import React from "react";
import Button from "../Components/Button";
import bgImg from "../assets/process.avif"; 
import stateImg from "../assets/basket-full-vegetables.png"
import CountUp from "../Components/CountUp";
import SectionReveal from "../Components/SectionReveal";
import { HashLink } from "react-router-hash-link";

const ProcessPage = () => {
  return (
    <div className="font-inter">

      {/* HERO / BANNER */}
      <SectionReveal delay={0.5} direction="down" amount={0.8}> 
      <section
        className="relative mx-auto px-6 py-32 md:py-35 bg-no-repeat bg-center bg-cover rounded-2xl "
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className=""> 
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center tracking-wider">
          Our <span className="text-orange-500">Process</span>
        </h1>
        <p className="mt-2 text-center text-white text-lg md:text-base rounded-2xl max-w-lg mx-auto backdrop-blur-md tracking-wider shadow-lg shadow-blue-200/50 p-6">
          From farm to your doorstep, our carefully designed process ensures freshness, speed, and reliability at every step.
        </p>
        </div>
      </section> </SectionReveal>

      {/* TIMELINE PROCESS */}
      <SectionReveal delay={0.05} direction="up" amount={0.8}> 
      <section className="max-w-330 mx-auto px-6 py-28">
        <div className="relative">

          {/* vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-0.75 h-full bg-orange-200 -translate-x-1/2"></div>

          {/* STEP 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="md:text-right md:pr-16">
              <h3 className="text-2xl font-bold text-zinc-800">Browse Products</h3>
              <p className="text-zinc-600 mt-3">
                Discover a wide selection of fresh groceries, fruits, vegetables and daily essentials carefully curated for quality.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="w-14 h-14 bg-orange-500 text-white flex items-center justify-center rounded-full font-bold text-lg shadow-lg">
                1
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1 relative flex justify-center">
              <div className="w-14 h-14 bg-orange-500 text-white flex items-center justify-center rounded-full font-bold text-lg shadow-lg">
                2
              </div>
            </div>
            <div className="order-1 md:order-2 md:pl-16">
              <h3 className="text-2xl font-bold text-zinc-800">Add To Cart</h3>
              <p className="text-zinc-600 mt-3">
                Easily select your favourite products and add them to your shopping cart within seconds.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="md:text-right md:pr-16">
              <h3 className="text-2xl font-bold text-zinc-800">Secure Checkout</h3>
              <p className="text-zinc-600 mt-3">
                Our checkout process is fast, simple and completely secure.
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="w-14 h-14 bg-orange-500 text-white flex items-center justify-center rounded-full font-bold text-lg shadow-lg">
                3
              </div>
            </div>
          </div>

          {/* STEP 4 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative flex justify-center">
              <div className="w-14 h-14 bg-orange-500 text-white flex items-center justify-center rounded-full font-bold text-lg shadow-lg">
                4
              </div>
            </div>
            <div className="order-1 md:order-2 md:pl-16">
              <h3 className="text-2xl font-bold text-zinc-800">Fast Delivery</h3>
              <p className="text-zinc-600 mt-3">
                Your groceries arrive fresh and on time directly to your doorstep.
              </p>
            </div>
          </div>

        </div>
      </section> </SectionReveal>

      {/* SPLIT IMAGE + STATS */}
      <SectionReveal delay={0.05} direction="down" amount={0.8}>
      <section className="bg-zinc-100 py-28">
        <div className="max-w-330 mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* placeholder for image */}
          <div className="h-105 bg-zinc-300 rounded-3xl">
            <img src={stateImg} alt="banner" className="w-full h-full object-cover rounded-2xl" />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-zinc-800">
              Freshness <span className="text-orange-500">Guaranteed</span>
            </h2>
            <p className="text-zinc-600 mt-6 leading-relaxed">
              Our logistics and sourcing system ensures that every grocery item travels the shortest path from farm to your kitchen.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="text-3xl font-bold text-orange-500"><CountUp value="10000+" duration={4000} /></h3>
                <p className="text-zinc-600">Orders Delivered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-500"><CountUp value="500+" duration={4000} /></h3>
                <p className="text-zinc-600">Fresh Products</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-500"><CountUp value="120+" duration={4000} /></h3>
                <p className="text-zinc-600">Farm Partners</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-500">24/7</h3>
                <p className="text-zinc-600">Support</p>
              </div>
            </div>
          </div>

        </div>
      </section>  </SectionReveal>

      {/* CTA SECTION */}
      <SectionReveal delay={0.05} amount={0.8}> 
      <section className="bg-linear-to-r from-orange-700 to-red-400 py-24 text-center text-white">
        <h2 className="text-4xl font-bold">
          Start Shopping Fresh Today
        </h2>
        <p className="mt-4 text-orange-100">
          Experience the fastest grocery delivery with premium quality products.
        </p>
        <div className="mt-8">
          {/* button */}
        <HashLink smooth to="/#products">
        <Button text={"Shop Now"}/>
        </HashLink>
        </div>
      </section> </SectionReveal>

    </div>
  );
};

export default ProcessPage;