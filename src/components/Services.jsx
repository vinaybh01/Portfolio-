import React, { useState, useEffect } from "react";
import { content } from "../Content";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const [isMobileView, setIsMobileView] = useState(false);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobileView ? 1 : 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const { services } = content;

  return (
    <section id="services" style={{ marginTop: "15px", paddingBottom: "40px" }}>
      <div
        className="md:container"
        style={{ padding: isMobileView ? "24px" : "" }}
      >
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4
          className="subtitle text-[22px] sm:text-[28px]"
          data-aos="fade-down"
        >
          {services.subtitle}
        </h4>
        <br />
        <div>
          <Slider {...settings}>
            {services.service_content.map((service, i) => (
              <div className="p-6" key={i}>
                <div
                  className="duration-300 border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary hover:border-slate-400"
                  style={{
                    width: isMobileView ? "80vw" : "35vw",
                    height: "auto",
                    paddingBottom: "20px",
                  }}
                >
                  <img
                    src={service.logo}
                    alt={service.title}
                    className="mx-auto"
                    style={{
                      width: isMobileView ? "80vw" : "35vw",
                      height: isMobileView ? "auto" : "34vh",
                      borderRadius: "10px 10px 0px 0px",
                    }}
                  />
                  <h6 className="my-3">{service.title}</h6>
                  <p
                    style={{
                      fontSize: isMobileView ? "12px" : "14px",
                      fontFamily: "Outfit",
                      width: isMobileView ? "80vw" : "35vw",
                      padding: "10px",
                    }}
                  >
                    {service.para}
                  </p>
                  <p
                    style={{
                      fontSize: isMobileView ? "12px" : "14px",
                      fontFamily: "Outfit",
                    }}
                  >
                    <span className="font-semibold">TECH STACK - </span>
                    {service.para2}
                  </p>
                  <div className="links flex space-x-4 font-semibold pt-5 justify-center gap-2">
                    <a href={service.demo}>
                      <button className="border px-1.5 py-0.5 rounded-md bg-slate-600 hover:bg-slate-800 text-white">
                        LIVE
                      </button>
                    </a>
                    <a href={service.code}>
                      <button className="border px-1.5 py-0.5 rounded-md bg-slate-600 hover:bg-slate-800 text-white">
                        CODE
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;
