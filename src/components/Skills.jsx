// import content
import { createElement, useState } from "react";
import { content } from "../Content";
// import modal package
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
  },
  overlay: {
    padding: "2rem",
  },
};
Modal.setAppElement("#root");

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      {/* modal */}
      <Modal style={customStyles}>
        <div className="flex items-center gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
      </Modal>

      {/* content */}
      <div className="md:container px-5  py-14">
        <h2 className="title">{skills.title}</h2>
        <h4 className="subtitle text-[22px] sm:text-[28px]">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-10">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              className="sm:cursor-pointer relative group w-[110px] sm:w-[145px] flex items-center
                gap-5 p-5"
            >
              {" "}
              <div className="">
                <div className="flex items-center justify-center">
                  <img src={skill.logo} alt="..." className="w-8 sm:w-10 m-2" />
                </div>
                <div>
                  <h6 className="text-[12px] sm:text-[16px]">{skill.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
