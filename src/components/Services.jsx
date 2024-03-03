import { content } from "../Content";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-4 py-14">
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
        <div className="flex gap-5 justify-between flex-wrap  grou services-section">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              className="min-w-[22rem] duration-300 border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-2 flex-1 hover:border-slate-400 hover:border-3"
            >
              <img
                src={content.logo}
                alt="..."
                className="mx-auto rounded-xl"
              />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
              <p className="">
                <span className="font-semibold">TECH STACK - </span>
                {content.para2}
              </p>
              <div className="links flex space-x-4 font-semibold pt-5 justify-center gap-2">
                <a href={content.demo}>
                  <button className="border px-1.5 py-0.5 rounded-md bg-slate-600 hover:bg-slate-800 text-white">
                    LIVE
                  </button>
                </a>
                <br />
                <a href={content.code}>
                  <button className="border px-1.5 py-0.5 rounded-md  bg-slate-600 hover:bg-slate-800 text-white">
                    CODE
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
