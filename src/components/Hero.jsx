import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10">
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2 className="text-[26px] md:text-[34px] lg:text-[48px]">
            {hero.title}
          </h2>
          <br />
          <div className="flex justify-end  mr-2">
            <a href={hero.link1}>
              <button className="btn text-[12px] sm:text-[16px]">
                {hero.btnText}
              </button>
            </a>
            <a href={hero.link2} className="ml-2">
              <button className="btn text-[12px] sm:text-[16px]">
                {hero.btnText2}
              </button>
            </a>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((content, i) => (
              <div key={i} className={`flex items-center w-80 gap-5`}>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img src={hero.image} className="h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
