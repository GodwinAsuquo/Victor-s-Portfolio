import React from "react";
import image1 from "../assets/wephcoPage/image1.png";
import image2 from "../assets/wephcoPage/image2.png";
import image3 from "../assets/wephcoPage/image3.png";
import carousel1 from "../assets/wephcoPage/carousel1.png";
//import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Wephco = () => {
  return (
    <>
      <div className="dark:bg-[#1C1C1E]">
        <section className="bg-dullGreen dark:bg-[#0D0D0D] text-white text-center pt-32">
          <h2 className="font-bold text-2xl mb-2 lg:text-5xl">WEPHCO</h2>
          <p className="font-light mb-20 w-[60%] m-auto text-lg lg:text-2xl">
            A website that connects property hunters to properties
          </p>
          <img className="lg:w-[90%] m-auto" src={image1} alt="" />
        </section>

        <section className="p-24 space-y-16 md:grid md:grid-cols-3 md:space-y-0 md:pl-0  dark:text-white">
          <div className="col-span-2">
            <div className="flex flex-row-reverse justify-between md:justify-evenly md:flex-row">
              <div>
                <h5 className="mb-4 font-semibold text-2xl md:text-3xl">
                  Year
                </h5>
                <p className="font-light md:text-2xl">2022</p>
              </div>
              <div>
                <h5 className="mb-4 font-semibold text-2xl md:text-3xl">
                  Role
                </h5>
                <ul className="font-light space-y-4 md:text-2xl">
                  <li>Service Design</li>
                  <li>User Research</li>
                  <li>Product strategy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h5 className="mb-4 font-semibold text-2xl md:text-3xl">Outcome</h5>
            <ul className="font-light space-y-4 md:text-2xl">
              <li>Service flows</li>
              <li>Standard Operations Practices</li>
              <li>Prototypes</li>
            </ul>
          </div>
        </section>

        <section className="px-10 pb-32 md:mt-44 text-center  dark:text-white">
          <h2 className="font-bold text-2xl mb-9  md:text-5xl">
            Project Brief
          </h2>
          <p className="leading-7 md:w-[70%] md:leading-loose md:text-xl tracking-wide m-auto">
            Wephco is a real estate company website designed to take the hassle
            of house hunting off the shoulder of Abuja Residents and help them
            avoid bad housing agents. As the sole UX Designer, I helped design
            the app from scratch with the vision of the founder. The main goal
            was to create a system where users can login to the app, place their
            requests and get feedback within the shortest possible time.
          </p>
        </section>

        {/* user research  */}

        <section className="bg-lightGreenBlue px-10 py-16 text-center dark:bg-[#0D0D0D] dark:text-white">
          <h2 className="font-semibold text-2xl mb-10 md:text-5xl">
            User Research
          </h2>
          <h3 className="text-xl my-4 font-medium md:text-3xl">
            THE OBJECTIVE
          </h3>
          <p className="font-light  md:tracking-wider md:text-xl md:w-3/5 md:m-auto md:leading-10">
            The user research questions seeks to discover the challenges of the
            average house hunter in Abuja and understudy their traditioanl house
            hunting methods. The user research is specifically tailored to Abuja
            residents.
          </p>

          <section className="bg-[#fff] my-8 py-8 px-3 dark:bg-[#2C2C2E] dark:text-white">
            <h3 className="mb-4 font-medium text-xl md:text-3xl">
              THE ASKS & RESPONSE
            </h3>
            <p className="font-light mb-9 md:text-xl md:w-4/5 md:m-auto md:leading-7 md:tracking-wider md:pb-9">
              The user research questions seeks to discover the challenges of
              the average house hunter in Abuja
            </p>
            <h4 className="font-medium text-lg mb-4 md:text-3xl">
              How does the average Nigerian feel about house hunting?
            </h4>
            <p className="font-light mb-9 md:text-xl md:w-4/5 md:m-auto md:leading-7 md:tracking-wider md:pb-9">
              House hunting is very stressful and time consuming. The most
              annoying part is, there is no guarantee of finding a property you
              will like after the whole stress
            </p>
            <h4 className="font-medium text-lg mb-4 md:text-3xl">
              What is the traditional house hunting process & its flaws?
            </h4>
            <p className="font-light mb-9 md:text-xl md:w-4/5 md:m-auto md:leading-7 md:tracking-wider md:pb-9">
              Most Abuja agents rely solely on housing agents to get properties.
              They pay a large percentage of the rent to the agent and also pay
              a legal fee. This pay most times is outragous and often
              discourages people from getting houses of they like
            </p>
            <h4 className="font-medium text-lg mb-4 md:text-3xl">
              How would Nigerians respond
            </h4>
            <p className="font-light mb-9 md:text-xl md:w-4/5 md:m-auto md:leading-7 md:tracking-wider md:pb-9">
              House hunting is very strssful and time consuming and the most
              annoying part is, there is no guarantee of finding a property you
              will like after the whole stress
            </p>
          </section>
        </section>

        {/* the oppourtunoty  */}

        <section className="text-center bg-dullGreen text-white px-6 py-10 md:py-20 dark:bg-[#2C2C2E] dark:text-white">
          <h4 className="font-bold text-2xl mb-6 md:uppercase md:text-4xl ">
            The Opportunity
          </h4>
          <p className=" font-light md:text-2xl md:w-3/5 m-auto">
            Residents of Abuja can now bank their trust on an organized system
            that saves them energy and money just for a small fee
          </p>
        </section>

        {/* the solution  */}

        <section className="text-center py-10 dark:bg-[#1C1C1E] dark:text-white">
          <h3 className="mb-6 font-bold text-2xl md:text-4xl">THE SOLUTION</h3>
          <h4 className="mb-3 font-medium text-xl md:text-3xl">
            Allow users make their choice{" "}
          </h4>
          <p className="font-light px-8 mx-auto md:w-4/5 md:text-xl">
            I discovered the easiest way to gain the trust of your users is by
            making them feel their opinions are valid. Hence, I implemented form
            designs to enable users tell us exactly what they want
          </p>
          <div className="bg-lightGreenBlue dark:bg-[#2C2C2E] mx-4 mt-8 mb-14 px-3 pt-12 rounded-lg md:mx-24">
            <img className="md:w-[90%] mx-auto" src={image2} alt="" />
          </div>
          <h4 className="mb-3 font-medium text-xl md:text-3xl">
            Build a system that manages user requests
          </h4>
          <p className="font-light px-8 mx-auto md:w-4/5 md:text-xl">
            I designed an admin section that helps staff of wephco to easily
            manage the request of their users. This system was designed to
            attend to customer requests.
          </p>
          <div className="bg-lightGreenBlue dark:bg-[#2C2C2E] mx-3 mt-8 mb-14 px-3 pt-7 rounded-lg md:mx-24">
            <img className="md:w-[90%] mx-auto" src={image3} alt="" />
          </div>
          {/* <h4 className='mb-6 font-medium text-xl md:uppercase md:text-3xl'>Other Screens</h4> */}
          <div className="grid grid-cols-12 bg-[#EFF2F1] dark:bg-[#2C2C2E] pt-6 px-4 rounded-lg md:mx-24">
            {/* <div className='grid place-items-center text-[#626E7E] dark:text-white'>
      <BsArrowLeftCircle size={40}/>
      </div> */}
            <img
              className="md:w-[90%] mx-auto col-span-12"
              src={carousel1}
              alt=""
            />
            {/* <div className='grid place-items-center text-[#626E7E] dark:text-white'>
      <BsArrowRightCircle size={40}/>
      </div> */}
          </div>
        </section>

        <section className="bg-[#FBFBFB] dark:bg-[#2C2C2E] mt-14  p-8 flex justify-between md:p-16">
          <Link to="/portfolio">
            <div>
              <p className="text-black opacity-[50%] md:text-2xl dark:text-white dark:opacity-[50%]">
                Previous
              </p>
              <h2 className="font-semibold text-xl md:text-5xl dark:text-white">
                My Portfolio
              </h2>
            </div>
          </Link>
          <Link to="/epay">
            <div>
              <p className="text-black opacity-[50%] dark:text-white dark:opacity-[50%] md:text-2xl">
                Next
              </p>
              <h2 className="font-semibold text-xl md:text-5xl dark:text-white">
                Epay
              </h2>
            </div>
          </Link>
        </section>
        <div className="pt-28"></div>
      </div>
    </>
  );
};

export default Wephco;
