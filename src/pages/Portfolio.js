import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import image1 from '../assets/portfolioPage/image1.png'
import image2 from '../assets/portfolioPage/image2.png'
import image3 from '../assets/portfolioPage/image3.png'
import image4 from '../assets/portfolioPage/image4.png'
import image5 from '../assets/portfolioPage/image5.png'



const Portfolio = () => {
  return (
    <>
    <div className="dark:bg-[#0D0D0D] dark:text-white">

    <section className='bg-deepGreen dark:bg-[#0D0D0D] text-white text-center pt-32'>
      <h2 className='font-bold text-2xl mb-2 lg:text-5xl'>MY PORTFOLIO</h2>
      <p className='font-light mb-20 w-[60%] m-auto text-lg lg:text-2xl'>This is an overview of what went into my portfolio</p>
      <img className='lg:w-[75%] m-auto' src={image1} alt="" />
    </section>

    <section className='p-24 space-y-16 md:grid md:grid-cols-3 md:space-y-0 md:pl-0'>
      <div className='col-span-2'>
      <div className='flex flex-row-reverse justify-between md:justify-evenly md:flex-row'>
      <div>
      <h5 className='mb-4 font-semibold text-2xl md:text-3xl'>Year</h5>
      <p className='font-light md:text-2xl'>2022</p>
      </div>
      <div>
      <h5 className='mb-4 font-semibold text-2xl md:text-3xl'>Role</h5>
        <ul className='font-light space-y-4 md:text-2xl'> 
        <li>Service Design</li>
        <li>User Research</li>
        <li>Product strategy</li>
        </ul>
      </div>
      </div>
      </div>
      
      <div className='col-span-1'>
      <h5 className='mb-4 font-semibold text-2xl md:text-3xl'>Outcome</h5>
        <ul className='font-light space-y-4 md:text-2xl'> 
        <li>Service flows</li>
        <li>Standard Operations Practices</li>
        <li>Prototypes</li>
        </ul>
      </div>
    </section>

    <section className='px-10 pb-32 md:mt-44 text-center'>
      <h2 className='font-bold text-2xl mb-9  md:text-5xl'>Project Brief</h2>
      <p className='leading-7 tracking-wide md:w-[70%] md:leading-loose md:text-xl m-auto'>My portfolio project website is one that explains the idea behind this portfolio
(My porfolio inside my porfolio).
 I did a walkthrough on my practices as a product designer and also talked about some of the projects I was privileged to be a part of and contribute to as a product designer </p>
    </section>

  <section className='bg-deepGreen dark:bg-[#0D0D0D] px-10 py-16 text-white text-center'>
      <h3 className='text-xl my-4 font-bold md:text-5xl '>THE OBJECTIVE</h3>
      <p className='font-light  md:tracking-wider md:text-xl md:w-3/5 md:m-auto md:leading-10'>I believe a good portfolio serves as proof of excellence. This porfolio was designed to serve as my Ambassador and appeal to the minds of anyone who requires my service.</p>
  </section>

    <section className='bg-[#fff] dark:bg-[#0D0D0D] py-8 px-3 text-center'>
      <h3 className='mb-4 font-bold text-xl md:text-5xl'>THE PORTFOLIO</h3>
      <p className='mb-9 md:text-xl md:w-4/5 md:m-auto md:leading-7 md:tracking-wider md:pb-9'>I highlighted “some” of the projects I have worked on. Below are the selected projects</p>
    </section>
  {/* the solution  */}
  <section className='text-center py-10'>
    <h4 className='mb-3 font-medium text-xl md:text-3xl'>WEPHCO WEBSITE</h4>
    <p className='font-light px-8 mx-auto md:w-4/5 md:text-xl'>A website for a company in the real estate industry </p>
    <Link to='/wephco'>
    <div className='bg-[#EFF2F1] dark:bg-[#1B1B1B] mt-8 mb-14 px-3 pt-12 rounded-lg w-[90%] mx-auto'>
      <img className='md:w-[90%] mx-auto' src={image2} alt="" />
    </div>
    </Link>

    <h4 className='mb-3 font-medium text-xl md:text-3xl'>WELLA AGENT MOBILE APP</h4>
    <p className='font-light px-8 mx-auto md:w-4/5 md:text-xl'>A progressive web application for agents of wellahealth</p>
    <Link to='/wella-agent'>
    <div className='bg-[#EFF2F1] dark:bg-[#1B1B1B] mt-8 mb-14 px-10 pt-7 rounded-lg w-[90%] mx-auto md:w-[80%]'>
      <img className='w-[90%] md:w-[50%] mx-auto' src={image3} alt="" />
    </div>
    </Link>

      <h4 className='mb-3 font-medium text-xl md:text-3xl'>EPAY APP</h4>
    <p className='font-light px-8 mx-auto md:w-4/5 md:text-xl'>A fintech solution using eNaira to improve and drive financial inclusion  by understanding the needs of the target audience </p>
    <Link to='/epay'>
    <div className='bg-[#EFF2F1] dark:bg-[#1B1B1B] mt-8 mb-14 px-10 pt-7 rounded-lg w-[90%] mx-auto md:w-[80%]'>
      <img className='w-[90%] md:w-[50%] mx-auto' src={image4} alt="" />
    </div>
    </Link>

    <h4 className='mb-3 font-medium text-xl md:text-3xl'>Chronicare</h4>
    <p className='font-light px-8 mx-auto md:w-4/5 md:text-xl'>An online drugstore</p>
      <Link to='/chronicare'>
    <div className='bg-[#EFF2F1] dark:bg-[#1B1B1B] mt-8 mb-14 px-3 pt-12 rounded-lg w-[90%] mx-auto'>
      <img className='md:w-[80%] mx-auto' src={image5} alt="" />
    </div>
    </Link>
    </section>

    
    
  <section className='bg-[#FBFBFB] dark:bg-[#1B1B1B] mt-14 mb-28 p-8 flex justify-between md:p-16'>
    <Link to='/chronicare'>
    <div>
        <p className='text-black opacity-[50%] md:text-2xl dark:text-white dark:opacity-[50%]'>Previous</p>
        <h2 className='font-semibold text-xl md:text-5xl dark:text-white'>Chronicare</h2>
    </div>
    </Link>
    <Link to='/wephco'>
    <div>
      <p className='text-black opacity-[50%] md:text-2xl dark:text-white dark:opacity-[50%]'>Next</p>
      <h2 className='font-semibold text-xl md:text-5xl dark:text-white'>Wephco</h2>
    </div>
    </Link>
  </section>
  <div className="pt-2"></div>
    </div>
    </>
  )
}

export default Portfolio