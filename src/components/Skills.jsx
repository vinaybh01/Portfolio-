import React from "react";
import { content } from "../Content";

function Skills() {
  const { skills } = content;

  return (
    <div>
      {" "}
      <h2 className="title" data-aos="fade-down">
        {skills.title}
      </h2>
      <h4 className="subtitle" data-aos="fade-down">
        {skills.subtitle}
      </h4>
    </div>
  );
}

export default Skills;
