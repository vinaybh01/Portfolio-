import { content } from "../Content";
import DEMO from "../assets/images/Services/demo.png";
import CODE from "../assets/images/Services/code.png";

const Services = () => {
  const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap  grou services-section">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              className="min-w-[20rem] duration-300 border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm 
              hover:!blur-none "
            >
              <img src={content.logo} alt="..." className="mx-auto " />
              <h6 className="my-3">{content.title}</h6> 
              <p className="leading-7">{content.para}</p>
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
