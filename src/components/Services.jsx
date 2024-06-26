import React, { useState, useEffect } from "react";
import { content } from "../Content";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [animate, setAnimate] = useState(false); // State to control animation

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Trigger animation after a short delay (adjust timing as needed)
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 500); // Adjust delay time as needed

    // Clean up timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const { services } = content;

  return (
    <section id="services" style={{ overflow: "hidden" }}>
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4
          className="subtitle"
          data-aos="fade-down"
          style={{ fontSize: isMobileView ? "20px" : "30px" }}
        >
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group services-section">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              className={`duration-300 border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 ${
                animate ? "opacity-100" : "opacity-0"
              }`} // Conditionally apply opacity classes based on state
              style={{ minWidth: isMobileView ? "90vw" : "30vw" }}
            >
              <img
                src={content.logo}
                alt="..."
                className="mx-auto"
                style={{ borderRadius: "18px", transition: "opacity 1s ease" }} // Apply transition for opacity change
              />
              <h6
                className="my-3"
                style={{ fontSize: isMobileView ? "16px" : "20px" }}
              >
                {content.title}
              </h6>
              <p
                className=""
                style={{
                  fontSize: isMobileView ? "13px" : "15px",
                  lineHeight: "20px",
                }}
              >
                {content.para}
              </p>
              <p
                style={{
                  opacity: "0.7",
                  fontWeight: "600",
                  paddingTop: "10px",
                  fontSize: isMobileView ? "13px" : "15px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>Tech Stack</span> -{" "}
                {content.para2}
              </p>
              <div className="links flex space-x-4 font-semibold pt-5 justify-center gap-2">
                <a href={content.demo}>
                  <button className="border px-[10px] py-[5px] rounded-md bg-slate-600 hover:bg-slate-800 text-white">
                    Visit Site
                  </button>
                </a>
                <br />
                <a href={content.code}>
                  <button className="border px-[10px] py-[5px]  rounded-md  bg-slate-600 hover:bg-slate-800 text-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
