import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import image1 from "../assets/wellaAgentPage/image1.png";
import image2 from "../assets/wellaAgentPage/image2.png";
import image3 from "../assets/wellaAgentPage/image3.png";
import image4 from "../assets/wellaAgentPage/image4.png";
import image5 from "../assets/wellaAgentPage/image5.png";
import carousel1 from "../assets/wellaAgentPage/carousel1.png";
import { Link } from "react-router-dom";

const WellaAgent = () => {
  return (
    <>
      <div className="dark:bg-[#0D0D0D] dark:text-white">
        <section className="bg-lightPurple dark:bg-[#0D0D0D] text-white text-center pt-32">
          <h2 className="font-bold text-2xl mb-2 lg:text-5xl">WELLA AGENT</h2>
          <p className="font-light mb-20 w-[60%] m-auto text-lg lg:text-2xl">
            A progreesive web applications that help agents all over Nigeria
            earn commission by selling health insurance plans
          </p>
          <img className="w-[60%] lg:w-[40%] m-auto" src={image1} alt="" />
        </section>

        <section className="p-24 space-y-16 md:grid md:grid-cols-3 md:space-y-0 md:pl-0">
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

        <section className="px-10 pb-32 text-center">
          <h2 className="font-bold text-2xl mb-9 md:mt-44 md:text-5xl">
            Project Brief
          </h2>
          <p className="leading-7 md:w-[70%] md:leading-loose md:text-xl tracking-wide m-auto">
            There was an urgent need to revamp the design of the user experience
            and user interface of the the wella agent app so It could improve
            the performance of the agents. Also, the old user interface was not
            to the standard of the Brand’s persona.
          </p>
        </section>

        {/* user research  */}

        <section className="bg-verylightPurple dark:bg-[#0D0D0D] px-10 py-16 text-center">
          <h2 className="font-semibold text-2xl mb-10 md:text-5xl">
            User Research
          </h2>
          <h3 className="text-xl my-4 font-medium md:text-3xl">
            THE OBJECTIVE
          </h3>
          <p className="font-light  md:tracking-wider md:text-xl md:w-3/5 md:m-auto md:leading-10">
            The user research seeks to discover the problems encountered by
            agents while using the app, improve efficiency by prioritizing the
            right features, streamlining processes and improving user experience
          </p>

          <section className="bg-[#fff] dark:bg-[#2C2C2E] my-8 py-8 px-3">
            <h3 className="mb-4 font-medium text-xl md:text-3xl">
              THE ASKS & RESPONSE
            </h3>
            <p className="font-light mb-9 md:text-xl md:w-4/5 md:m-auto md:leading-7 md:tracking-wider md:pb-9">
              TThe user research questions seeks to discover the challenges of
              the average house hunter in Abuja
            </p>
            <h4 className="font-medium text-lg mb-4 md:text-3xl">
              What is the most used feature on the app?
            </h4>
            <p className="font-light mb-9 md:text-xl md:w-4/5 md:m-auto md:leading-7 md:tracking-wider md:pb-9">
              The popular response in no particular order was “Wallet,
              Subscription and Agents”. Navigating the old design to find these
              features was quite a process.{" "}
            </p>
            <h4 className="font-medium text-lg mb-4 md:text-3xl">
              How long does it take to register a new user? and why?
            </h4>
            <p className="font-light mb-9 md:text-xl md:w-4/5 md:m-auto md:leading-7 md:tracking-wider md:pb-9">
              It takes nearly 5 minutes to register a new subscriber on the app
              because the input fields are too many and it’s really easy to lose
              track of what point of the form you are and what you’ve attended
              to.
            </p>
          </section>
        </section>

        {/* the oppourtunity  */}

        <section className="text-center bg-lightPurple dark:bg-[#2C2C2E] text-white px-6 py-10 md:py-20">
          <h4 className="font-bold text-2xl mb-6 md:uppercase md:text-4xl ">
            The Opportunity
          </h4>
          <p className=" font-light md:text-2xl md:w-3/5 m-auto">
            The wellahealth agents can work smarter and faster to cover as many
            Nigerians as possible. They will make more money while delivering
            excellent service{" "}
          </p>
        </section>

        {/* the solution  */}

        <section className="text-center py-10">
          <h3 className="mb-6 font-bold text-2xl md:text-4xl">THE SOLUTION</h3>
          <h4 className="mb-3 font-medium text-xl md:text-3xl">
            Make the most used features available on the home screen
          </h4>
          <p className="font-light px-8 mx-auto md:w-4/5 md:text-xl">
            I added the most used features to the home screen so the agents
            could easily take action as soon as they login into the app. This
            improved their efficiency.
          </p>
          <div className="bg-verylightPurple dark:bg-[#2C2C2E] mx-4 mt-8 mb-14 px-3 pt-12 rounded-lg md:mx-24">
            <img className="w-[70%] md:w-[50%] mx-auto" src={image2} alt="" />
          </div>
          <h4 className="mb-3 font-medium text-xl md:text-3xl">
            Split the registration into simple steps
          </h4>
          <p className="font-light px-8 mx-auto md:w-4/5 md:text-xl">
            I grouped each section of the user registration based on their
            similarity, I also gave each of them headings so agents will no
            longer get lost during registration
          </p>
          <div className="bg-verylightPurple dark:bg-[#2C2C2E] mx-3 mt-8 mb-14 px-3 pt-7 rounded-lg md:mx-24">
            <img className="w-[80%] md:w-[60%] mx-auto" src={image3} alt="" />
          </div>
          <h4 className="mb-3 font-medium text-xl md:text-3xl">
            Allow agents to view the plan information of their subscribers
          </h4>
          <p className="font-light px-8 mx-auto md:w-4/5 md:text-xl">
            By my design solution, I helped agents save cost of constantly
            trying to communicate with customer success team.
          </p>
          <div className="bg-verylightPurple dark:bg-[#2C2C2E] mx-4 mt-8 mb-14 px-3 pt-12 rounded-lg md:mx-24">
            <img className="w-[80%] md:w-[50%] mx-auto" src={image4} alt="" />
          </div>
          <h4 className="mb-3 font-medium text-xl md:text-3xl">
            Allow agents managers to view the activities of thier sub agents{" "}
          </h4>
          <p className="font-light px-8 mx-auto md:w-4/5 md:text-xl">
            To improve transperency in the system, I designed a section in the
            app where agent managers can view the complete activities of their
            super agents and sub agents
          </p>
          <div className="bg-verylightPurple dark:bg-[#2C2C2E] mx-4 mt-8 mb-14 px-3 pt-12 rounded-lg md:mx-24">
            <img className="w-[80%] md:w-[50%] mx-auto" src={image5} alt="" />
          </div>
          <h4 className="mb-6 font-medium text-xl md:uppercase md:text-3xl">
            Other Screens
          </h4>
          <div className="bg-verylightPurple dark:bg-[#2C2C2E] pt-6 px-4 rounded-lg md:mx-24">
            <img
              className="w-[100%] md:w-[60%] mx-auto col-span-10"
              src={carousel1}
              alt=""
            />
          </div>
        </section>

        <section className="bg-[#FBFBFB] dark:bg-[#2C2C2E] mt-14 mb-28 p-8 flex justify-between md:p-16">
          <Link to="/epay">
            <div>
              <p className="text-black opacity-[50%] dark:text-white dark:opacity-[50%] md:text-2xl ">
                Previous
              </p>
              <h2 className="font-semibold text-xl dark:text-white md:text-5xl">
                Epay
              </h2>
            </div>
          </Link>
          <Link to="/chronicare">
            <div>
              <p className="text-black opacity-[50%] dark:text-white dark:opacity-[50%] md:text-2xl">
                Next
              </p>
              <h2 className="font-semibold text-xl dark:text-white md:text-5xl">
                Chronicare
              </h2>
            </div>
          </Link>
        </section>
        <div className="pt-2"></div>
      </div>
    </>
  );
};

export default WellaAgent;
