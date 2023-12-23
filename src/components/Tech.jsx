import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-col items-center'>
      <span className='text-2xl font-bold mb-4'>   
      Language Certificates
          </span>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-36 flex flex-col items-center' key={technology.name}>
            <span className='text-center mb-2'>{technology.name}</span>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};


export default SectionWrapper(Tech, "");
