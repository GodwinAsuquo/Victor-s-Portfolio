import wephco from "../assets/wephco2.png";
import wellahealth from "../assets/wellahealth2.png";
import epay from "../assets/epay2.png";
import portfolio from "../assets/portfolio2.png";
import chronicare from "../assets/chroniccare2.png";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { forwardRef, useRef } from "react";

const ProjectsIntroduction = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="dark:bg-[#0D0D0D] pb-36">
      <h2 className=" text-center dark:text-white font-bold text-2xl pb-10 pt-20">
        Selected Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-5 px-14">
        {/* wephco  */}
        <Link to="/wephco">
          <div className="relative flex bg-[#095069] h-[250px] md:h-[390px] w-[100%] rounded-lg p-5 text-white">
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-semi-bold md:text-lg">WEPHCO</h3>
                <p className="text-sm font-light">Real Estate</p>
              </div>
              <p className="flex flex-row items-center text-xs md:text-base">
                See work
                <FiChevronRight />
              </p>
            </div>
            <img
              className="absolute bottom-0 right-0 w-[75%] max-w-[450px]"
              src={wephco}
              alt="wephco image"
            />
          </div>
        </Link>

        {/* wella agent  */}
        <Link to="/wella-agent">
          <div className="relative flex bg-[#4059AD] h-[250px] md:h-[390px] w-[100%] rounded-lg p-5 text-white ">
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-semi-bold md:text-lg">WELLA AGENT</h3>
                <p className="text-sm font-light">Health & Wellness</p>
              </div>
              <p className="flex flex-row items-center text-xs md:text-base">
                See work
                <FiChevronRight />
              </p>
            </div>
            <img
              className="absolute bottom-0 right-[8%] w-[55%] max-w-[350px]"
              src={wellahealth}
              alt="wephco image"
            />
          </div>
        </Link>

        {/* epay  */}
        <Link to="/epay">
          <div className="relative flex bg-[#465055] h-[250px] md:h-[390px] w-[100%] rounded-lg p-5 text-white ">
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-semi-bold md:text-lg">EPAY</h3>
                <p className="text-sm font-light">Fintech App</p>
              </div>
              <p className="flex flex-row items-center text-xs md:text-base">
                See work
                <FiChevronRight />
              </p>
            </div>
            <img
              className="absolute bottom-0 right-[8%] w-[55%] max-w-[350px]"
              src={epay}
              alt="wephco image"
            />
          </div>
        </Link>

        {/* my portfolio  */}
        <Link to="/portfolio">
          <div className="relative flex bg-[#094440] h-[250px] md:h-[390px] w-[100%] rounded-lg p-5 text-white ">
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-semi-bold md:text-lg">MY PORTFOLIO</h3>
                <p className="text-sm font-light">Work Showcase</p>
              </div>
              <p className="flex flex-row items-center text-xs md:text-base">
                See work
                <FiChevronRight />
              </p>
            </div>
            <img
              className="absolute bottom-0 right-0 w-[72%] md:w-[75%] max-w-[450px]"
              src={portfolio}
              alt="wephco image"
            />
          </div>
        </Link>

        {/* chronicare  */}
        <Link to="/chronicare">
          <div className="relative flex bg-[#1489C8] h-[250px] md:h-[390px] w-[100%]  rounded-lg p-5 text-white ">
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="font-semi-bold md:text-lg">CHRONICARE</h3>
                <p className="text-sm font-light">Health & Wellness</p>
              </div>
              <p className="flex flex-row items-center text-xs md:text-base">
                See work
                <FiChevronRight />
              </p>
            </div>
            <img
              className="absolute bottom-0 right-0 w-[71%] max-w-[450px] md:w-[75%]"
              src={chronicare}
              alt="wephco image"
            />
          </div>
        </Link>
      </div>
    </section>
  );
});

export default ProjectsIntroduction;
