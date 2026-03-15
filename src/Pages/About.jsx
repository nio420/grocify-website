import React from "react";
import bannerImg from "../assets/all-banner.jpg";
import FAQ from "../Components/FAQ";
import CountUp from "../Components/CountUp";
import SectionReveal from "../Components/SectionReveal";

const About = () => {
  return (
    <section>
      {/* Banner */}
      <SectionReveal delay={0.5} direction="down" amount={0.8}>
      <div
        className="w-full h-80 md:h-105 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }} // add your banner image here
      >
        <h1 className="text-white text-4xl md:text-5xl font-bold bg-black/40 px-8 py-4 rounded-xl backdrop-blur-md tracking-wider shadow-lg shadow-blue-200/50">
          About <span className="text-orange-400">Us</span>
        </h1>
        <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
      </div>  </SectionReveal>

      {/* About Intro */}
      <SectionReveal delay={0.03} direction="down" amount={0.8}> 
      <div className="max-w-330 mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
            Fresh Groceries Delivered
            <span className="text-orange-500"> With Care</span>
          </h2>

          <p className="mt-6 text-zinc-600 leading-relaxed">
            At GrOcify we believe that everyone deserves access to fresh,
            organic, and high-quality groceries. Our mission is to make grocery
            shopping easier, faster, and more convenient by delivering
            farm-fresh products directly to your doorstep.
          </p>

          <p className="mt-4 text-zinc-600 leading-relaxed">
            From fruits and vegetables to daily essentials, we carefully select
            every product to ensure the best quality for our customers. With a
            strong commitment to freshness and customer satisfaction, we aim to
            transform the way people shop for groceries online.
          </p>
        </div>

        <div className="bg-zinc-100 rounded-2xl p-10 text-center">
          <h3 className="text-5xl font-bold text-orange-500"><CountUp value="10" duration={3000} />k+</h3>
          <p className="text-zinc-600 mt-2">Happy Customers</p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div>
              <h4 className="text-3xl font-bold text-zinc-800"><CountUp value="500+" duration={4000} /></h4>
              <p className="text-zinc-600 text-sm">Products</p>
            </div>

            <div>
              <h4 className="text-3xl font-bold text-zinc-800"><CountUp value="120+" duration={4000} /></h4>
              <p className="text-zinc-600 text-sm">Farm Partners</p>
            </div>
          </div>
        </div>
      </div> </SectionReveal>

      {/* Mission Vision Values */}
      <SectionReveal delay={0.03} direction="up" amount={0.8}>
      <div className="bg-zinc-100 py-24">
        <div className="max-w-330 mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800">
            Our <span className="text-orange-500">Purpose</span>
          </h2>
          <p className="text-zinc-600 mt-4 max-w-2xl mx-auto">
            We are committed to delivering fresh groceries while creating a
            seamless shopping experience for every household.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            <div className="group bg-white p-10 rounded-3xl border border-zinc-200 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mt-6">
                Our Mission
              </h3>
              <p className="text-zinc-600 mt-4 leading-relaxed">
                To provide fresh and healthy groceries while making online
                grocery shopping simple, fast, and reliable for everyone.
              </p>
            </div>

            <div className="group bg-white p-10 rounded-3xl border border-zinc-200 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl">
                👁️
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mt-6">
                Our Vision
              </h3>
              <p className="text-zinc-600 mt-4 leading-relaxed">
                To become the most trusted grocery platform delivering quality
                products and exceptional service to every household.
              </p>
            </div>

            <div className="group bg-white p-10 rounded-3xl border border-zinc-200 hover:shadow-xl hover:-translate-y-2 transition duration-300">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl">
                ❤️
              </div>
              <h3 className="text-xl font-bold text-zinc-800 mt-6">
                Our Values
              </h3>
              <p className="text-zinc-600 mt-4 leading-relaxed">
                Freshness, honesty, and customer satisfaction guide everything
                we do at GrOcify.
              </p>
            </div>
          </div>
        </div>
      </div> </SectionReveal>

      {/* Why Choose Us */}
      <SectionReveal delay={0.03} direction="down" amount={0.8}> 
      <div className="max-w-330 mx-auto px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-800">
          Why Choose <span className="text-orange-500">GrOcify</span>
        </h2>

        <p className="text-center text-zinc-600 mt-4 max-w-2xl mx-auto">
          Experience the easiest way to shop fresh groceries with trusted
          quality and reliable delivery.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          <div className="relative bg-zinc-100 p-10 rounded-3xl text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="text-4xl text-orange-500 mb-4">🥦</div>
            <h4 className="text-xl font-semibold">Fresh Products</h4>
            <p className="text-zinc-600 mt-3">
              Every product is carefully selected from trusted farms to ensure
              freshness and quality.
            </p>
          </div>

          <div className="relative bg-zinc-100 p-10 rounded-3xl text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="text-4xl text-orange-500 mb-4">🚚</div>
            <h4 className="text-xl font-semibold">Fast Delivery</h4>
            <p className="text-zinc-600 mt-3">
              Quick and reliable delivery so your groceries arrive fresh and on
              time.
            </p>
          </div>

          <div className="relative bg-zinc-100 p-10 rounded-3xl text-center hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="text-4xl text-orange-500 mb-4">⭐</div>
            <h4 className="text-xl font-semibold">Best Quality</h4>
            <p className="text-zinc-600 mt-3">
              Premium quality groceries carefully chosen for your healthy
              lifestyle.
            </p>
          </div>
        </div>
      </div> </SectionReveal>

    {/* FAQ */}
      <SectionReveal delay={0.03} direction="up" amount={0.8}> 
      <FAQ /> 
      </SectionReveal>
    </section>
  );
};

export default About;
